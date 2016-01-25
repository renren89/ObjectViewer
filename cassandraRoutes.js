import express from 'express';
import bodyParser from 'body-parser';

var cassandra = require('cassandra-driver');
var client = new cassandra.Client({ contactPoints: ['127.0.0.1']});
const router = express.Router();
client.connect(function(err, result) {
    console.log('Connected.');
});
router.use(bodyParser.json());

router.get('/metadata', (req, res) => {
  res.send(client.hosts.slice(0).map(node => {
    const { address, rack, datacenter, version } = node;
    return {
      address,
      rack,
      datacenter,
      version
    }
  }))
});

router.post('/tables', (req, res) => {
  const { keyspace, table } = req.body;
  console.log(req.body);
  client.metadata.getTable(keyspace, table, (err, table) => {
    return res.send(table);
  })
})


export default router;