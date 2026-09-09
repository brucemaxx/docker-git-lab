# Evidências

Esta pasta é reservada para capturas de tela da execução local e do Git/GitHub.

Sugestão de capturas para a entrega:

1. `git log --oneline --decorate --graph --all` mostrando os commits das atividades.
2. `git status` mostrando a árvore limpa.
3. `docker images` mostrando `ping-tool:1.0` e `web-server:1.0`.
4. `docker compose ps` mostrando `postgres-aula` e `pgadmin-aula` em execução.
5. pgAdmin aberto em `http://localhost:5050`.
6. `docker network inspect docker-git-lab-rede` mostrando os dois containers na mesma rede.
7. Site aberto em `http://localhost:8080`.
8. Alteração de `web/site/index.html` refletida no navegador via Bind Mount, sem rebuild.
