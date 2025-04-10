<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pescados da Vila - Peixaria</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }
        
        body {
            background-color: #f0f8ff;
            color: #333;
        }
        
        header {
            background: linear-gradient(to right, #0277bd, #039be5);
            color: white;
            padding: 20px 0;
            text-align: center;
        }
        
        .logo {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        nav {
            background-color: #01579b;
            padding: 10px 0;
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
        }
        
        nav li {
            margin: 0 15px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #b3e5fc;
        }
        
        main {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }
        
        .destaque {
            background: url('/api/placeholder/1000/400') center/cover no-repeat;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            margin-bottom: 30px;
            border-radius: 8px;
            position: relative;
        }
        
        .destaque::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 8px;
        }
        
        .destaque-content {
            position: relative;
            z-index: 1;
            padding: 20px;
        }
        
        .destaque h2 {
            font-size: 2.5em;
            margin-bottom: 15px;
        }
        
        .destaque p {
            font-size: 1.2em;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .btn {
            display: inline-block;
            background-color: #039be5;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 20px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #0277bd;
        }
        
        .produtos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .produto {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        
        .produto:hover {
            transform: translateY(-5px);
        }
        
        .produto img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .produto-info {
            padding: 15px;
        }
        
        .produto h3 {
            margin-bottom: 10px;
            color: #01579b;
        }
        
        .preco {
            font-size: 1.2em;
            color: #0277bd;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .disponibilidade {
            color: #4caf50;
            margin-bottom: 10px;
        }
        
        .estoque-baixo {
            color: #ff9800;
        }
        
        .indisponivel {
            color: #f44336;
        }
        
        .add-carrinho {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s;
        }
        
        .add-carrinho:hover {
            background-color: #388e3c;
        }
        
        #pedido {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        form input, form textarea, form select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        form button {
            background-color: #039be5;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1em;
            transition: background-color 0.3s;
        }
        
        form button:hover {
            background-color: #0277bd;
        }
        
        #carrinho {
            margin-bottom: 30px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        #carrinho-itens {
            margin-top: 20px;
        }
        
        #carrinho-itens div {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        
        #total {
            font-weight: bold;
            margin-top: 20px;
            text-align: right;
            font-size: 1.2em;
        }
        
        .empty-cart {
            text-align: center;
            color: #777;
            margin: 20px 0;
        }
        
        .prazo-entrega {
            margin-top: 20px;
            padding: 15px;
            background-color: #e1f5fe;
            border-radius: 8px;
            border-left: 4px solid #039be5;
        }
        
        footer {
            background-color: #01579b;
            color: white;
            text-align: center;
            padding: 30px 0;
            margin-top: 50px;
        }
        
        .contato-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        
        .contato-item {
            margin: 0 15px;
            display: flex;
            align-items: center;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .section-title {
            border-bottom: 2px solid #039be5;
            padding-bottom: 10px;
            margin-bottom: 30px;
            font-size: 1.8em;
            color: #01579b;
        }
        
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav li {
                margin: 5px 0;
            }
            
            .produtos {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            
            .destaque {
                height: 300px;
            }
            
            .destaque h2 {
                font-size: 2em;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">Pescados da Vila</div>
        <p>Os melhores pescados de água doce da região</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#" class="tab-link" data-tab="home">Início</a></li>
            <li><a href="#" class="tab-link" data-tab="produtos">Produtos</a></li>
            <li><a href="#" class="tab-link" data-tab="pedido">Fazer Pedido</a></li>
            <li><a href="#" class="tab-link" data-tab="sobre">Sobre Nós</a></li>
        </ul>
    </nav>
    
    <main>
        <div id="home" class="tab-content active">
            <div class="destaque">
                <div class="destaque-content">
                    <h2>Pescados Frescos do Rio Todo Dia</h2>
                    <p>Na Pescados da Vila você encontra grande variedade de peixes de água doce frescos, diretamente do pescador para sua mesa.</p>
                    <a href="#" class="btn tab-link" data-tab="produtos">Ver Produtos</a>
                </div>
            </div>
            
            <h2 class="section-title">Destaques da Semana</h2>
            
            <div class="produtos">
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Filé de Porquinho">
                    <div class="produto-info">
                        <h3>Filé de Porquinho</h3>
                        <p>Filé de porquinho fresco, pescado no rio.</p>
                        <p class="preco">R$ 25,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Filé de Porquinho" data-preco="25.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Filé de Corvina">
                    <div class="produto-info">
                        <h3>Filé de Corvina</h3>
                        <p>Filé de corvina fresco.</p>
                        <p class="preco">R$ 25,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Filé de Corvina" data-preco="25.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Corvina Inteira">
                    <div class="produto-info">
                        <h3>Corvina Inteira</h3>
                        <p>Corvina inteira fresca.</p>
                        <p class="preco">R$ 8,00/kg</p>
                        <p class="disponibilidade estoque-baixo">Estoque baixo</p>
                        <button class="add-carrinho" data-nome="Corvina Inteira" data-preco="8.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Tucunaré">
                    <div class="produto-info">
                        <h3>Tucunaré</h3>
                        <p>Tucunaré fresco.</p>
                        <p class="preco">R$ 10,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Tucunaré" data-preco="10.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="produtos" class="tab-content">
            <h2 class="section-title">Nossos Produtos</h2>
            
            <div class="produtos">
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Filé de Porquinho">
                    <div class="produto-info">
                        <h3>Filé de Porquinho</h3>
                        <p>Filé de porquinho fresco, pescado no rio.</p>
                        <p class="preco">R$ 25,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Filé de Porquinho" data-preco="25.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Filé de Corvina">
                    <div class="produto-info">
                        <h3>Filé de Corvina</h3>
                        <p>Filé de corvina fresco.</p>
                        <p class="preco">R$ 25,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Filé de Corvina" data-preco="25.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Corvina Inteira">
                    <div class="produto-info">
                        <h3>Corvina Inteira</h3>
                        <p>Corvina inteira fresca.</p>
                        <p class="preco">R$ 8,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Corvina Inteira" data-preco="8.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Tucunaré">
                    <div class="produto-info">
                        <h3>Tucunaré</h3>
                        <p>Tucunaré fresco.</p>
                        <p class="preco">R$ 10,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Tucunaré" data-preco="10.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Piranha">
                    <div class="produto-info">
                        <h3>Piranha</h3>
                        <p>Piranha fresca.</p>
                        <p class="preco">R$ 5,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Piranha" data-preco="5.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Pacu">
                    <div class="produto-info">
                        <h3>Pacu</h3>
                        <p>Pacu fresco.</p>
                        <p class="preco">R$ 12,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Pacu" data-preco="12.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Traíra">
                    <div class="produto-info">
                        <h3>Traíra</h3>
                        <p>Traíra fresca.</p>
                        <p class="preco">R$ 8,00/kg</p>
                        <p class="disponibilidade estoque-baixo">Estoque baixo</p>
                        <button class="add-carrinho" data-nome="Traíra" data-preco="8.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
                
                <div class="produto">
                    <img src="/api/placeholder/300/200" alt="Pintado">
                    <div class="produto-info">
                        <h3>Pintado</h3>
                        <p>Pintado fresco.</p>
                        <p class="preco">R$ 15,00/kg</p>
                        <p class="disponibilidade">Em estoque</p>
                        <button class="add-carrinho" data-nome="Pintado" data-preco="15.00">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="pedido" class="tab-content">
            <h2 class="section-title">Fazer Pedido</h2>
            
            <div id="carrinho">
                <h3>Seu Carrinho</h3>
                <div id="carrinho-itens">
                    <p class="empty-cart">Seu carrinho está vazio.</p>
                </div>
                <div id="total">Total: R$ 0,00</div>
            </div>
            
            <form id="form-pedido">
                <h3>Informações para Entrega</h3>
                <div>
                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" required>
                </div>
                
                <div>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" required>
                </div>
                
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required>
                </div>
                
                <div>
                    <label for="endereco">Endereço completo:</label>
                    <textarea id="endereco" rows="3" required></textarea>
                </div>
                
                <div>
                    <label for="data-entrega">Data para entrega:</label>
                    <input type="date" id="data-entrega" required>
                </div>
                
                <div>
                    <label for="horario">Horário preferido:</label>
                    <select id="horario" required>
                        <option value="">Selecione um horário</option>
                        <option value="manha">Manhã (8h às 12h)</option>
                        <option value="tarde">Tarde (13h às 17h)</option>
                        <option value="noite">Noite (18h às 21h)</option>
                    </select>
                </div>
                
                <div>
                    <label for="observacoes">Observações:</label>
                    <textarea id="observacoes" rows="3"></textarea>
                </div>
                
                <div class="prazo-entrega">
                    <h4>Prazo de Entrega</h4>
                    <p>Entregamos no mesmo dia para pedidos feitos até às 10h da manhã. Pedidos após este horário serão entregues no dia seguinte.</p>
                    <p>Taxa de entrega: Grátis para pedidos acima de R$ 100,00. Para outros valores, consulte as taxas por região.</p>
                </div>
                
                <button type="submit" id="finalizar-pedido">Finalizar Pedido</button>
            </form>
        </div>
        
        <div id="sobre" class="tab-content">
            <h2 class="section-title">Sobre a Pescados da Vila</h2>
            
            <div style="display: flex; gap: 30px; align-items: center; margin-bottom: 30px;">
                <div style="flex: 1;">
                    <img src="/api/placeholder/500/300" alt="Nossa loja" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="flex: 1;">
                    <h3 style="color: #01579b; margin-bottom: 15px;">Nossa História</h3>
                    <p>Fundada em 2018, a Pescados da Vila nasceu da paixão dos pescadores locais que queriam levar o melhor do rio diretamente para a mesa dos clientes.</p>
                    <p style="margin-top: 15px;">Com mais de 7 anos de experiência, nos tornamos referência em pescados frescos e de qualidade na região, mantendo parcerias com pescadores artesanais que respeitam o meio ambiente e praticam a pesca sustentável.</p>
                </div>
            </div>
            
            <div style="background-color: white; padding: 30px; border-radius: 8px; margin-top: 30px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <h3 style="color: #01579b; margin-bottom: 15px;">Nossos Diferencia