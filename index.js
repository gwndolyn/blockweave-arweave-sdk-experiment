import Arweave from "arweave";
import express from 'express';
const app = express();

// Or manually specify a host
const arweave = Arweave.init({
        host: "127.0.0.1",
        port: 1984,
        protocol: "http",
});

app.get('/', (req, res) => {
        res.send({ "response": "blockweave-arweave-sdk-experiment" });
});

app.listen(12585, () => {
        console.log('Example app listening on port 12585!');
});