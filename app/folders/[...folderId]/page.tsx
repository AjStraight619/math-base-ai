type FolderPageProps = {
  params: {
    folderIds: string[];
  };
};

export default function FolderPage({ params }: FolderPageProps) {
  const { folderIds } = params;
  return <div></div>;
}
