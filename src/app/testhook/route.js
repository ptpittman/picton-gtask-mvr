// /**
//  *
//  * Receives a JSON object from paperform webhook source and adds it to the Google Cloud Tasks queue.
//  *
//  */
import { NextResponse } from "next/server";
import { CloudTasksClient } from "@google-cloud/tasks";

const POST = async (request) => {
  try {
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("ERROR!");
    console.error(JSON.stringify(error, null, 2));
    return NextResponse.json(
      { received: false },
      { status: error?.code == 6 ? 200 : 403 }
    );
  }
};
export { POST };
