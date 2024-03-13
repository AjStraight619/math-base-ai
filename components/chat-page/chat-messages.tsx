import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Message } from "ai";
import "katex/dist/katex.min.css";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UserAvatar from "../user/avatar";

type ChatMessageProps = {
  messages: Message[];
};

const ChatMessage = ({ messages }: ChatMessageProps) => {
  const { user } = useKindeBrowserClient();

  return (
    <ul className="flex flex-col space-y-4 mt-6 mb-24">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra
      nunc mi, a pulvinar quam condimentum nec. Proin sodales, libero a auctor
      fermentum, nisl eros vehicula mi, at imperdiet diam elit quis nunc.
      Curabitur pharetra, massa sit amet interdum hendrerit, nulla enim lobortis
      turpis, in aliquet massa velit nec nulla. Nulla eu lectus sit amet tortor
      venenatis elementum et ac erat. Mauris eget nunc eget sapien imperdiet
      mollis ac eu enim. Integer fermentum, arcu eget feugiat tincidunt, nulla
      dolor sodales lorem, quis sollicitudin nisl purus eu magna. Vivamus vitae
      laoreet libero, in gravida nulla. Nulla vel metus scelerisque ante
      sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
      viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
      lacinia congue felis in faucibus. Donec dui quam, dignissim et mi sed,
      suscipit fermentum quam. Fusce non pretium lacus. Pellentesque eu
      tincidunt tortor. Aliquam dapibus tincidunt metus. Praesent justo dolor,
      lobortis quis lobortis dignissim, pulvinar ac lorem. Vestibulum sed ante.
      Donec sagittis euismod purus. Mauris felis ligula, venenatis sed auctor
      mattis, bibendum down lorem. Vivamus fermentum massa commodo est interdum,
      in porttitor justo placerat. Mauris sit amet massa sed orci vehicula
      cursus. Curabitur commodo, quam vel congue dictum, arcu odio rutrum lorem,
      nec lacinia nisi libero sit amet nibh. Nulla at volutpat diam, a congue
      nibh. Proin sodales ipsum at nulla ultricies tempor. Mauris nec ipsum in
      arcu consectetur hendrerit. Nulla facilisi. Sed vitae facilisis nisi, et
      ornare arcu. Quisque quis quam ipsum. Sed vitae semper lorem. Nullam non
      felis vel nulla sodales vestibulum. Mauris nec dui nec justo bibendum
      viverra. Vivamus dapibus, mauris id sodales mattis, felis sapien vehicula
      quam, sed hendrerit tortor sapien porta libero. Fusce vel faucibus augue.
      Nulla facilisi. Etiam aliquet, metus vitae gravida suscipit, felis magna
      commodo velit, nec laoreet ligula ipsum nec sapien. Integer eget luctus
      dolor. Aenean scelerisque lacus ultrices ipsum finibus ultricies. Nam
      magna ipsum, tempor in odio eget, porta pharetra velit. Vivamus in sem nec
      leo mollis molestie at eget sem. pretium lacus. Pellentesque eu tincidunt
      tortor. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis
      quis lobortis dignissim, pulvinar ac lorem. Vestibulum sed ante. Donec
      sagittis euismod purus. Mauris felis ligula, venenatis sed auctor mattis,
      bibendum down lorem. Vivamus fermentum massa commodo est interdum, in
      porttitor justo placerat. Mauris sit amet massa sed orci vehicula cursus.
      Curabitur commodo, quam vel congue dictum, arcu odio rutrum lorem, nec
      lacinia nisi libero sit amet nibh. Nulla at volutpat diam, a congue nibh.
      Proin sodales ipsum at nulla ultricies tempor. Mauris nec ipsum in arcu
      consectetur hendrerit. Nulla facilisi. Sed vitae facilisis nisi, et ornare
      arcu. Quisque quis quam ipsum. Sed vitae semper lorem. Nullam non felis
      vel nulla sodales vestibulum. Mauris nec dui nec justo bibendum viverra.
      Vivamus dapibus, mauris id sodales mattis, felis sapien vehicula quam, sed
      hendrerit tortor sapien porta libero. Fusce vel faucibus augue. Nulla
      facilisi. Etiam aliquet, metus vitae gravida suscipit, felis magna commodo
      velit, nec laoreet ligula ipsum nec sapien. Integer eget luctus dolor.
      Aenean scelerisque lacus ultrices ipsum finibus ultricies. Nam magna
      ipsum, tempor in odio eget, porta pharetra velit. Vivamus in sem nec leo
      mollis molestie at eget sem.
      {messages.map((msg) => (
        <li className="flex flex-row gap-4" key={msg.id}>
          <div>
            {msg.role === "user" ? <UserAvatar user={user} /> : <AIAvatar />}
          </div>
          <p className="whitespace-pre-line">{msg.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ChatMessage;

const AIAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src={""} />
      <AvatarFallback>NG</AvatarFallback>
    </Avatar>
  );
};
