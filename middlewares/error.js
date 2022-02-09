module.exports = (err, req, res, _next) => {
// middleware de erro baseado na aula ao vivo do dia 23.3
// da turma 14 - tribo B
const status = err.status || 500;
return res.status(status).json(err.message);
};