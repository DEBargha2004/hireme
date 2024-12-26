import ChatContainer from "../_components/chat-container";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ChatContainer id={id} />;
}
