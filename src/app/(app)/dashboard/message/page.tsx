import ChatContainer from "./_components/chat-container";
import SidebarChatItem from "./_components/sidebar-chat-item";

export default function Page() {
  return (
    <div className="w-full h-[calc(100dvh-88px)] flex">
      <div className="w-1/3 h-full space-y-3 overflow-y-auto scroller-hide">
        {Array.from({ length: 10 }).map((_, i) => (
          <SidebarChatItem key={i} />
        ))}
      </div>
      <div className="w-2/3 h-full overflow-y-scroll scroller-hide">
        <ChatContainer />
      </div>
    </div>
  );
}
