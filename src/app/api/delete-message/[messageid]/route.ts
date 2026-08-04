import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";

export async function DELETE(request: Request, 
  { params }: { params: Promise<{messageid: string}> }) {
  const  {messageid } = await params
  const session = await getServerSession(authOptions);
  // const user: User = session?.user;
console.log("Message Id: " + messageid);

  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "Not Authenticated",
      },
      { status: 401 },
    );
  }

  try {
    await prisma.message.delete({
      where: { id: messageid }
    })

    return Response.json(
      {
        success: true,
        message: "Message Deleted",
      },
      { status: 200 },
    );

  } catch (error) {
    console.log('Error in delete message route: ', error);
    return Response.json(
      {
        success: false,
        message: "Error deleting message",
      },
      { status: 500 },
    );
  }
}