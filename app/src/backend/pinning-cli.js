import { writer } from "../network/ipfsConnector";
import { publisher } from "../network/ipfsPubSub";
import { receive } from "./ipfs/receiver";

const PUBSUB_TOPIC = "done_pollen";

if (process.argv[2]) {
    const { publish, close } = publisher(PUBSUB_TOPIC,"");
    async function run() {
        await publish(process.argv[2]);
        close();
    }
    run();
} else {

    (async () => {
        const { pin } = writer();
        const receiveStream = receive({
            ipns: true,
            nodeid: "done_pollen",
        }, async cid => {
            console.log("pinning result", await pin(cid))
        }, "")
        for await (const cid of receiveStream) {
            console.log("Received", cid);
        }
        console.log(`listening to publish of "${PUBSUB_TOPIC}" topic and pinning`)
    })();

}