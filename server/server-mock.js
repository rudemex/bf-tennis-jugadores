const Express = require('express');
const router = new Express.Router();

const delay = (ms = 0) => new Promise((res) => setTimeout(res, ms));

router.get('/health', async (req, res) => {
  res.status(200);
  res.json({ status: 'UP' });
});

router.get('/jugadores', async (req, res) => {
  await delay();
  res.status(200);
  //res.status(409).send(new Error());
  res.json(require('../mock/jugadores-list.json'));
});

router.post('/jugadores', async (req, res) => {
  await delay();
  const response = {
    id: Date.now(), // 2021-06-19T18:52:22 => 21738217983721983 (timestamp)
    ...req.body, // nombre puntos
  };
  res.status(201);
  res.json(response);
});

router.put('/jugadores/:id', async (req, res) => {
  await delay();
  res.status(200);
  res.json(req.body);
});

router.delete('/jugadores/:id', async (req, res) => {
  await delay();
  res.status(200);
  res.json();
});

router.get('/partidos', async (req, res) => {
  await delay();
  res.status(200);
  res.json(require('../mock/partidos-list.json'));
});

router.post('/partidos', async (req, res) => {
  await delay();
  const response = {
    id: Date.now(), // 2021-06-19T18:52:22 => 21738217983721983 (timestamp)
    ...req.body,
  }
  res.status(201);
  res.json(response);
});

router.put('/partidos/:id', async (req, res) => {
  await delay();
  res.status(200);
  res.json(req.body);
});

router.delete('/partidos/:id', async (req, res) => {
  await delay();
  res.status(200);
  res.json();
});

router.put('/partidos/:id/actions/init', async (req, res) => {
  await delay();
  res.status(200);
  res.json(1);
});

module.exports = router;
