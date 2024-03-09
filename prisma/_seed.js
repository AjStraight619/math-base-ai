require('dotenv').config({ path: '../.env' });
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



async function seed() {
    console.log(process.env.DATABASE_URL);
    const user = await getUser();
    if (!user) {
        console.log('No user found to seed data for.');
        return;
    }

    const userId = user.id;

    // // Seed chats
    // const chatTitles = ['Math Homework Help', 'Science Project Discussion', 'Book Club'];
    // for (const title of chatTitles) {
    //     await prisma.chat.create({
    //         data: {
    //             userId: userId,
    //             title: title,
    //         },
    //     });
    // }

    // Seed folders and notes
    const folderTitles = ['Science', 'Mathematics', 'Literature', 'History'];
    const noteTitlesAndContents = [
        [
            { title: 'Quantum Physics Notes', contents: ['Introduction to Quantum Physics', 'Schrodinger Equation Basics'] },
            { title: 'Relativity Theory', contents: ['Special Relativity Explained', 'General Relativity in a Nutshell'] },
        ],
        [
            { title: 'Calculus Notes', contents: ['Derivatives and Integrals', 'The Fundamental Theorem of Calculus'] },
            { title: 'Algebra Notes', contents: ['Quadratic Equations', 'Linear Algebra Introduction'] },
        ],
        [
            { title: 'Literary Analysis', contents: ['Themes in Modern Literature', 'Symbolism in Literature'] },
            { title: 'Shakespeare\'s Works', contents: ['Hamlet Overview', 'Romeo and Juliet Summary'] },
        ],
        [
            { title: 'World War II', contents: ['Major Events of WWII', 'Impact of WWII on Modern History'] },
            { title: 'Ancient Civilizations', contents: ['Mesopotamia and the Fertile Crescent', 'Ancient Egypt: Society and Culture'] },
        ],
    ];

    for (let i = 0; i < folderTitles.length; i++) {
        const folder = await prisma.folder.create({
            data: {
                userId: userId,
                title: folderTitles[i],
                notes: {
                    create: noteTitlesAndContents[i].map(note => ({
                        title: note.title,
                        noteContents: {
                            create: note.contents.map(content => ({
                                userId: userId,
                                content: content,
                            })),
                        },
                    })),
                },
            },
            include: {
                notes: {
                    include: {
                        noteContents: true,
                    },
                },
            },
        });
    }

    console.log('Seeding completed.');
}

async function getUser() {
    return { id: 'kp_c1414654b95342289df6d3e048618abb' };
}

seed().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});