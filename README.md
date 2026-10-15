# SF Creative · Landing page

Site estático (HTML + CSS + JS, sem build). Funciona em qualquer hospedagem estática.

## Antes de publicar
Abra `app.js` e preencha o bloco `CONFIG` no topo:
- `whatsapp` — só números, com 55 + DDD (configurado: 5515988028794).
- `email`, `instagram`, `vimeo` — vazio = o link some da página.

## Publicar (GitHub + Vercel)
1. Crie um repositório no GitHub (ex.: `sf-creative-site`) e envie **o conteúdo desta pasta** (o `index.html` precisa ficar na raiz do repositório).
   - Pelo site: *Add file › Upload files* (arraste tudo, inclusive a pasta `assets`). O upload pelo navegador aceita até 100 arquivos por vez: envie `assets/portfolio` num segundo commit se precisar.
   - Ou pelo terminal, dentro desta pasta:
     ```
     git init
     git add .
     git commit -m "Landing SF Creative"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/sf-creative-site.git
     git push -u origin main
     ```
2. Na Vercel: *Add New › Project* › importe o repositório › Framework Preset **Other** › deixe Build Command e Output Directory vazios › **Deploy**.
3. Domínio próprio: *Settings › Domains* › adicione o domínio e configure o DNS como a Vercel indicar.
4. Cada novo push no GitHub publica a nova versão sozinho.

## Atualizar o portfólio
- Coloque os 3 arquivos do projeto em `assets/portfolio/` (`nome-poster.jpg` vertical 540×960, `nome-prev.mp4` de ~6 s sem áudio, `nome-full.mp4`).
- Em `app.js`, copie um item da lista `PROJECTS` e ajuste os dados e caminhos.
- `FEATURED` define quais 6 aparecem em destaque (pela posição na lista); os demais vão para o slider "Mais projetos".
- Ao trocar um arquivo, use um nome novo (ex.: `-v2`): o navegador guarda os arquivos de `assets` por 7 dias.
