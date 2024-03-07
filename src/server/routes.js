const {Router} = require('express');
const router = new Router()
const viagens = require('./controllers/viagensController')
const usuarios = require('./controllers/usuariosController')
const checkins = require('./controllers/checkinController')
const passageiros = require('./controllers/passageirosController')
const passageiroviagem = require('./controllers/passageiroviagemController')
const bagagem = require('./controllers/bagagemController')
const avaliacao = require('./controllers/avaliacaoController')
const ocupacao = require('./controllers/ocupacaovoo')
const novosusuarios = require('./controllers/novosusuarios')
const avaliacaogeral = require('./controllers/avaliacaogeral')
const bagagensdesp = require('./controllers/bagagensdesp');

//Avaliacao
router.post('/avaliacao', avaliacao.create)
router.get('/avaliacao', avaliacao.index)

//Viagem aviao
router.post('/viagemAviao', viagens.create)
router.get('/', viagens.index)
router.get('/filter', viagens.filter)
router.get('/filterId', viagens.filterId)
router.put('/viagemAviaoUp/:id', viagens.update)
router.delete('/viagemAviaoDel/:id', viagens.delete)

//Usuario
router.post('/usuarioPost', usuarios.create)
router.get('/usuario', usuarios.index)
router.get('/usuariofilt', usuarios.filter)
router.put('/usuario/:id_usuario', usuarios.update)
router.delete('/usuario/:id_usuario', usuarios.delete)
router.post('/login', usuarios.login)

//Checkin
router.post('/checkin', checkins.create)
router.get('/checkinfiltP', checkins.filterP)
//router.get('/checkin', checkin.index)

//Passageiro
router.post('/passageiro', passageiros.create)
router.get('/passageiroget', passageiros.index)
router.get('/passageirofilt', passageiros.filter)
router.put('/passageiro/:id_passageiro', passageiros.update)
router.delete('/passageiro/:id_passageiro', passageiros.delete)

//Passageiro viagem
router.post('/passagempost', passageiroviagem.create)
router.get('/passagemget', passageiroviagem.index)
router.get('/passagemFilt', passageiroviagem.filter)

//Bagagem

router.post('/bagagem', bagagem.create)
router.get('/bagagem', bagagem.index)
router.get('/bagagemfilter', bagagem.filter)
router.put('/bagagem/:id', bagagem.update)
router.delete('/bagagem/:id', bagagem.delete)

router.get('/ocupacao', ocupacao.ocup)
router.get('/check', ocupacao.check)

//Novos usuarios
router.get(`/novosusuarios`, novosusuarios.index)

//Avalicao geral do site
router.get('/avaliacaogeral', avaliacaogeral.index)
router.get('/avaliacaogeralS', avaliacaogeral.sum)

//Bagagens despachadas
router.get('/bagagensT', bagagensdesp.index)
router.get('/bagagensdesp', bagagensdesp.desp)
module.exports = router
