/**
 * MUNDO RH - Glossário Completo e Base de Conhecimento Didática
 * Contém termos de todos os 6 Mundos com definições, aplicações práticas e legislação.
 */

export const GLOSSARY_DATA = [
  // ==========================================
  // MUNDO 01: FOLHA DE PAGAMENTO
  // ==========================================
  {
    id: 'salario',
    worldId: 'mundo-1',
    term: 'Salário',
    shortDef: 'Contraprestação devida e paga diretamente pelo empregador ao empregado pelo serviço prestado.',
    fullDef: 'O salário é o valor financeiro e utilidades que o empregado recebe mensalmente da empresa contratante como retribuição pelo tempo à disposição e trabalho executado (art. 457 da CLT).',
    whereUsed: 'Contrato de trabalho, holerite, cálculos rescisórios e benefícios previdenciários.',
    practicalExample: 'Se o contrato define remuneração de R$ 2.500,00 por mês, esse é o valor que serve de ponto de partida para a prestação dos serviços.',
    type: 'provento'
  },
  {
    id: 'salario-base',
    worldId: 'mundo-1',
    term: 'Salário-base',
    shortDef: 'Valor fixo estipulado em contrato, sem incluir adicionais, gratificações ou comissões.',
    fullDef: 'É o valor principal acordado entre empregado e empregador, servindo de base para o cálculo de adicionais (como horas extras, insalubridade sobre o mínimo ou base conforme convenção, etc.).',
    whereUsed: 'Primeira linha do holerite (código 001) e cláusula salarial da CTPS.',
    practicalExample: 'Um assistente tem salário-base de R$ 2.000,00. Mesmo que receba horas extras no mês, seu salário-base contratual continua sendo R$ 2.000,00.',
    type: 'provento'
  },
  {
    id: 'salario-bruto',
    worldId: 'mundo-1',
    term: 'Salário Bruto',
    shortDef: 'Soma total de todos os proventos devidos ao colaborador no mês antes de qualquer desconto.',
    fullDef: 'Também chamado de total de vencimentos. Engloba o salário-base acrescido de horas extras, adicionais (noturno, insalubridade, periculosidade), DSR, gratificações e comissões.',
    whereUsed: 'Campo "Total de Vencimentos" do recibo de pagamento e base para tributação do INSS e FGTS.',
    practicalExample: 'Salário-base de R$ 3.000 + R$ 300 de horas extras + R$ 50 de DSR = Salário Bruto de R$ 3.350,00.',
    type: 'provento'
  },
  {
    id: 'salario-liquido',
    worldId: 'mundo-1',
    term: 'Salário Líquido',
    shortDef: 'Valor efetivamente depositado na conta bancária do trabalhador após todos os descontos legais e autorizados.',
    fullDef: 'É o resultado matemático da fórmula: Salário Bruto menos os Descontos (INSS, IRRF, vale-transporte, pensão alimentícia, faltas, etc.).',
    whereUsed: 'Campo "Valor Líquido a Receber" no rodapé do holerite e no comprovante do PIX/TED da folha.',
    practicalExample: 'Se o bruto totalizou R$ 3.350,00 e os descontos somaram R$ 450,00, o salário líquido a receber é R$ 2.900,00.',
    type: 'resultado'
  },
  {
    id: 'proventos',
    worldId: 'mundo-1',
    term: 'Proventos',
    shortDef: 'Créditos e valores a receber que aumentam o total que o colaborador tem direito na folha.',
    fullDef: 'Englobam todos os itens positivos do contracheque: salário, comissões, prêmios, adicional de periculosidade, insalubridade, horas extras, DSR e reembolsos devidos.',
    whereUsed: 'Coluna "Vencimentos" ou "Proventos" do demonstrativo de pagamento.',
    practicalExample: 'Qualquer verba que some dinheiro ao trabalhador no mês é classificada como provento.',
    type: 'provento'
  },
  {
    id: 'descontos',
    worldId: 'mundo-1',
    term: 'Descontos',
    shortDef: 'Valores subtraídos do salário bruto por exigência legal, judicial ou autorização prévia.',
    fullDef: 'Reduções aplicadas ao holerite. Podem ser legais (INSS, IRRF, faltas, DSR perdido), judiciais (pensão alimentícia) ou convencionais/autorizadas (VT até 6%, VR coparticipativo, plano de saúde).',
    whereUsed: 'Coluna "Descontos" do holerite.',
    practicalExample: 'O desconto de 6% do salário-base a título de vale-transporte ou o recolhimento mensal da previdência (INSS).',
    type: 'desconto'
  },
  {
    id: 'inss',
    worldId: 'mundo-1',
    term: 'INSS',
    shortDef: 'Instituto Nacional do Seguro Social; contribuição previdenciária descontada do trabalhador.',
    fullDef: 'Desconto obrigatório retido pela empresa na folha e repassado à Previdência Social. As alíquotas são progressivas (7,5% a 14%), garantindo benefícios como aposentadoria, auxílio-doença e salário-maternidade.',
    whereUsed: 'Desconto mensal no holerite e declaração no eSocial.',
    practicalExample: 'Calculado em faixas progressivas sobre a remuneração bruta até o teto do INSS.',
    type: 'desconto'
  },
  {
    id: 'fgts',
    worldId: 'mundo-1',
    term: 'FGTS',
    shortDef: 'Fundo de Garantia do Tempo de Serviço; depósito obrigatório feito pela empresa.',
    fullDef: 'Valor equivalente a 8% do salário bruto (2% para jovens aprendizes) que o empregador DEVE depositar mensalmente em conta vinculada na Caixa Econômica Federal. NÃO é descontado do trabalhador!',
    whereUsed: 'Informativo no rodapé do holerite (Base FGTS e FGTS do Mês) e no app FGTS do trabalhador.',
    practicalExample: 'Com remuneração de R$ 3.000,00, a empresa desembolsa R$ 240,00 adicionais para a conta do FGTS sem tirar um centavo do salário do empregado.',
    type: 'informativo'
  },
  {
    id: 'irrf',
    worldId: 'mundo-1',
    term: 'IRRF',
    shortDef: 'Imposto de Renda Retido na Fonte incidente sobre a renda do trabalhador.',
    fullDef: 'Imposto federal retido mensalmente pela empresa sobre o salário que ultrapassar a faixa de isenção da tabela da Receita Federal, após deduzir INSS oficial, dependentes e pensão.',
    whereUsed: 'Linha de descontos do holerite e comprovante anual de rendimentos (DIRF/eSocial).',
    practicalExample: 'Após abater o INSS pago e os dependentes legais da remuneração bruta, aplica-se a alíquota da tabela progressiva e subtrai-se a parcela a deduzir.',
    type: 'desconto'
  },
  {
    id: 'pensao-alimenticia',
    worldId: 'mundo-1',
    term: 'Pensão Alimentícia',
    shortDef: 'Desconto em folha determinado judicialmente para sustento de dependentes.',
    fullDef: 'Quando determinado por ofício do juiz da Vara de Família, a empresa é obrigada a reter o percentual fixado sobre os rendimentos e transferir diretamente para a conta do alimentando.',
    whereUsed: 'Campo de descontos do holerite, cumprindo estritamente a decisão judicial.',
    practicalExample: 'Ofício estipula 20% sobre os rendimentos líquidos (após INSS e IRRF) para pensão dos filhos.',
    type: 'desconto'
  },
  {
    id: 'dsr',
    worldId: 'mundo-1',
    term: 'DSR',
    shortDef: 'Descanso Semanal Remunerado; repouso preferencialmente aos domingos com remuneração garantida.',
    fullDef: 'Direito constitucional do trabalhador a 24 horas consecutivas de descanso por semana sem prejuízo do salário. Para quem recebe horas extras ou comissões, o DSR gera reflexo proporcional a receber.',
    whereUsed: 'Já embutido no salário do mensalista, mas discriminado como provento avulso quando há horas extras ou adicionais variáveis.',
    practicalExample: 'Fórmula do reflexo: (Total de Horas Extras no mês / Dias Úteis) x Domingos e Feriados.',
    type: 'provento'
  },
  {
    id: 'horas-extras',
    worldId: 'mundo-1',
    term: 'Horas Extras',
    shortDef: 'Horas trabalhadas além da jornada diária e semanal habitual contratada.',
    fullDef: 'Tempo de serviço que excede o limite contratual (geralmente 8h diárias ou 44h semanais). A CLT garante acréscimo mínimo de 50% em dias úteis e 100% em domingos e feriados (ou conforme CCT).',
    whereUsed: 'Cartão de ponto, fechamento de folha e coluna de proventos no contracheque.',
    practicalExample: 'Um colaborador com valor da hora de R$ 20,00 recebe R$ 30,00 por cada hora extra com adicional de 50%.',
    type: 'provento'
  },
  {
    id: 'adicional-noturno',
    worldId: 'mundo-1',
    term: 'Adicional Noturno',
    shortDef: 'Acréscimo salarial pago pelo trabalho executado no período da noite.',
    fullDef: 'Para trabalhadores urbanos, é o acréscimo de no mínimo 20% sobre a hora diurna para o trabalho prestado entre as 22h de um dia e as 5h do dia seguinte. A hora noturna também é reduzida (52 minutos e 30 segundos).',
    whereUsed: 'Holerite de profissionais de plantão noturno, vigilantes, porteiros e indústrias.',
    practicalExample: 'Quem trabalha das 22h às 05h recebe 20% a mais por cada hora trabalhada nesse intervalo.',
    type: 'provento'
  },
  {
    id: 'faltas',
    worldId: 'mundo-1',
    term: 'Faltas',
    shortDef: 'Ausências do empregado ao expediente de trabalho sem justificativa legal.',
    fullDef: 'Quando o colaborador se ausenta sem atestado médico válido ou sem respaldo no rol do art. 473 da CLT, a empresa pode descontar o dia não trabalhado e o DSR correspondente da semana.',
    whereUsed: 'Espelho de ponto e linha de descontos da folha de pagamento.',
    practicalExample: 'Faltar um dia na terça-feira sem justificativa acarreta o desconto do dia e a perda do DSR daquela semana.',
    type: 'desconto'
  },
  {
    id: 'atrasos',
    worldId: 'mundo-1',
    term: 'Atrasos',
    shortDef: 'Chegadas após o horário ou saídas antecipadas sem justificativa.',
    fullDef: 'A CLT estabelece tolerância de até 5 minutos por batida, com limite máximo de 10 minutos diários (art. 58, §1º). Minutos que ultrapassarem esse limite podem ser descontados da remuneração.',
    whereUsed: 'Ponto eletrônico e desconto acumulado de horas/minutos no holerite.',
    practicalExample: 'Chegar 25 minutos atrasado permite à empresa descontar a totalidade dos 25 minutos.',
    type: 'desconto'
  },
  {
    id: 'vale-transporte',
    worldId: 'mundo-1',
    term: 'Vale-transporte',
    shortDef: 'Benefício legal para custear o deslocamento residência-trabalho-residência.',
    fullDef: 'Benefício obrigatório regulamentado pela Lei nº 7.418/85. O empregador pode descontar até 6% do salário-base do empregado. Se o custo das passagens for menor que 6%, desconta-se apenas o custo real.',
    whereUsed: 'Desconto mensal de até 6% no holerite e recarga de cartões de transporte público.',
    practicalExample: 'Para salário de R$ 2.000, 6% é R$ 120. Se a condução do mês custar R$ 200, a empresa desconta R$ 120 e arca com os outros R$ 80.',
    type: 'desconto'
  },
  {
    id: 'vale-refeicao',
    worldId: 'mundo-1',
    term: 'Vale-refeição',
    shortDef: 'Crédito fornecido pela empresa para aquisição de refeições em restaurantes durante a jornada.',
    fullDef: 'Geralmente estipulado em Convenção Coletiva de Trabalho ou por adesão da empresa ao PAT (Programa de Alimentação do Trabalhador). Pode ter desconto de coparticipação limitado a 20%.',
    whereUsed: 'Cartão de benefícios do colaborador e possível desconto simbólico no holerite.',
    practicalExample: 'A empresa fornece R$ 600,00 em cartão VR e desconta um valor de coparticipação autorizado de R$ 30,00.',
    type: 'beneficio'
  },
  {
    id: 'convenio-medico',
    worldId: 'mundo-1',
    term: 'Convênio Médico',
    shortDef: 'Plano de saúde oferecido pela empresa aos seus colaboradores.',
    fullDef: 'Benefício corporativo opcional ou previsto em CCT. Pode ser integralmente custeado pela empresa ou ter coparticipação e inclusão de dependentes descontada no holerite mediante autorização expressa.',
    whereUsed: 'Campo de descontos autorizados no holerite.',
    practicalExample: 'Desconto mensal de mensalidade de dependente ou pequenas taxas de coparticipação em consultas.',
    type: 'desconto'
  },
  {
    id: 'ajuda-de-custo',
    worldId: 'mundo-1',
    term: 'Ajuda de Custo',
    shortDef: 'Ressarcimento de despesas indispensáveis para a execução do trabalho.',
    fullDef: 'Verba indenizatória destinada a cobrir despesas do empregado, como transferência de localidade ou gastos com home office. Pela Reforma Trabalhista, não tem natureza salarial e não sofre INSS/FGTS.',
    whereUsed: 'Provento indenizatório na folha ou pagamento avulso com comprovantes.',
    practicalExample: 'Pagamento de R$ 150,00 mensais para auxílio de internet e energia do funcionário em teletrabalho.',
    type: 'provento'
  },

  // ==========================================
  // MUNDO 02: SEGURANÇA E ADICIONAIS
  // ==========================================
  {
    id: 'insalubridade',
    worldId: 'mundo-2',
    term: 'Insalubridade',
    shortDef: 'Adicional salarial pago pelo trabalho exposto a agentes nocivos à saúde.',
    fullDef: 'Compensação financeira devida a quem trabalha exposto a agentes físicos (ruído, calor), químicos (solventes, ácidos) ou biológicos (vírus, bactérias) acima dos limites de tolerância (NR-15).',
    whereUsed: 'Holerite e Laudo Técnico das Condições Ambientais do Trabalho (LTCAT).',
    practicalExample: 'Enfermeiros ou técnicos de radiologia expostos a agentes biológicos e radiação.',
    type: 'provento'
  },
  {
    id: 'graus-de-insalubridade',
    worldId: 'mundo-2',
    term: 'Graus de Insalubridade',
    shortDef: 'Classificação do risco à saúde: Mínimo (10%), Médio (20%) e Máximo (40%).',
    fullDef: 'Calculados sobre o salário mínimo nacional (salvo se convenção coletiva estipular sobre o salário-base ou piso): Grau Mínimo = 10%, Grau Médio = 20%, Grau Máximo = 40%.',
    whereUsed: 'Determinado pelo laudo do médico ou engenheiro de segurança do trabalho e aplicado na folha.',
    practicalExample: 'Grau máximo (40%) para quem lida com esgotos ou lixo urbano; grau médio (20%) para ruído contínuo excessivo.',
    type: 'conceito'
  },
  {
    id: 'periculosidade',
    worldId: 'mundo-2',
    term: 'Periculosidade',
    shortDef: 'Adicional de 30% sobre o salário-base pago a quem arrisca a própria vida.',
    fullDef: 'Adicional devido a empregados expostos a perigo iminente de morte: inflamáveis, explosivos, energia elétrica de alta tensão, segurança patrimonial armada e motoboys (NR-16). É sempre 30% sobre o salário-base!',
    whereUsed: 'Holerite e Programa de Gerenciamento de Riscos (PGR).',
    practicalExample: 'Eletricista de alta tensão com salário de R$ 3.000 recebe 30% a mais (R$ 900,00 de adicional de periculosidade).',
    type: 'provento'
  },
  {
    id: 'atividades-perigosas',
    worldId: 'mundo-2',
    term: 'Atividades Perigosas',
    shortDef: 'Ocupações regulamentadas na NR-16 que colocam o trabalhador em risco letal iminente.',
    fullDef: 'Exemplos legais: frentistas em postos de combustível (inflamáveis), operários de fábricas de fogos de artifício (explosivos), vigilantes armados e motociclistas de entrega.',
    whereUsed: 'Enquadramento na CBO, PPP (Perfil Profissiográfico Previdenciário) e eSocial.',
    practicalExample: 'O motoboy que faz entregas diárias no trânsito tem direito garantido ao adicional de periculosidade de 30%.',
    type: 'conceito'
  },
  {
    id: 'diferencas-insalubridade-periculosidade',
    worldId: 'mundo-2',
    term: 'Insalubridade x Periculosidade',
    shortDef: 'Insalubridade afeta a saúde gradativamente; Periculosidade causa risco súbito de vida.',
    fullDef: 'A insalubridade degrada a saúde ao longo do tempo (10%, 20% ou 40% s/ salário mínimo). A periculosidade envolve risco iminente de morte súbita (30% s/ salário-base). Não são cumulativos: o trabalhador deve optar por um.',
    whereUsed: 'Decisões periciais trabalhistas e consultoria preventiva de DP.',
    practicalExample: 'Frentista de posto: exposto a inflamáveis (periculosidade) e vapores de benzeno (insalubridade), recebendo o mais favorável.',
    type: 'conceito'
  },
  {
    id: 'adicionais-trabalhistas',
    worldId: 'mundo-2',
    term: 'Adicionais Trabalhistas',
    shortDef: 'Acréscimos remuneratórios devidos em condições de trabalho anormais ou gravosas.',
    fullDef: 'Conjunto de compensações pecuniárias obrigatórias por lei: adicional de horas extras (mínimo 50%), adicional noturno (20%), insalubridade (10%, 20%, 40%), periculosidade (30%) e adicional de transferência (25%).',
    whereUsed: 'Tabela de rubricas da folha de pagamento e eSocial.',
    practicalExample: 'Garantir que a remuneração recompense adequadamente o desgaste ou sacrifício além da rotina comum.',
    type: 'conceito'
  },

  // ==========================================
  // MUNDO 03: RECRUTAMENTO E SELEÇÃO
  // ==========================================
  {
    id: 'recrutamento-interno',
    worldId: 'mundo-3',
    term: 'Recrutamento Interno',
    shortDef: 'Processo de preenchimento de vagas com colaboradores que já pertencem à empresa.',
    fullDef: 'Estratégia de atração de candidatos aproveitando os atuais talentos da organização por meio de promoções verticais ou transferências horizontais. Motiva a equipe e reduz custos e tempo de integração.',
    whereUsed: 'Mural interno de vagas, plano de carreira e comunicações de RH.',
    practicalExample: 'Divulgar uma vaga de Analista Pleno exclusivamente para os atuais Assistentes da empresa.',
    type: 'conceito'
  },
  {
    id: 'recrutamento-externo',
    worldId: 'mundo-3',
    term: 'Recrutamento Externo',
    shortDef: 'Busca de profissionais no mercado de trabalho para ocupar posições na empresa.',
    fullDef: 'Atração de candidatos fora do quadro atual da empresa. Traz novas ideias, oxigenação cultural e perfis não encontrados internamente, embora tenha maior custo e tempo de adaptação.',
    whereUsed: 'Plataformas de vagas (LinkedIn, Catho, Gupy), redes sociais e feiras de emprego.',
    practicalExample: 'Publicar anúncio de vaga no LinkedIn procurando um especialista em inteligência artificial para o time.',
    type: 'conceito'
  },
  {
    id: 'triagem-de-curriculos',
    worldId: 'mundo-3',
    term: 'Triagem de Currículos',
    shortDef: 'Filtro inicial dos currículos recebidos para selecionar os perfis compatíveis com a vaga.',
    fullDef: 'Análise preliminar das informações dos candidatos (formação, experiência profissional, localização, pretensão salarial e competências essenciais) frente à Descrição de Cargo (Job Description).',
    whereUsed: 'Sistemas ATS (Applicant Tracking System) e planilhas de gestão de candidatos.',
    practicalExample: 'De 200 currículos enviados para Assistente Contábil, filtrar os 15 que possuem CRC ativo e experiência em conciliação.',
    type: 'conceito'
  },
  {
    id: 'entrevista',
    worldId: 'mundo-3',
    term: 'Entrevista de Emprego',
    shortDef: 'Encontro presencial ou online para dialogar e avaliar o candidato de forma aprofundada.',
    fullDef: 'Conversa estruturada ou semi-estruturada onde o recrutador ou gestor da área avalia trajetória, postura, expectativas, fit cultural e respostas a situações reais (entrevistas por competências no modelo STAR).',
    whereUsed: 'Segunda ou terceira etapa do funil de atração e seleção.',
    practicalExample: 'Fazer perguntas como "Conte-me uma ocasião em que você precisou lidar com um prazo apertado na folha de pagamento".',
    type: 'conceito'
  },
  {
    id: 'selecao',
    worldId: 'mundo-3',
    term: 'Seleção',
    shortDef: 'Fase de escolha do melhor candidato entre os concorrentes avaliados.',
    fullDef: 'Processo decisório onde, após testes técnicos, dinâmicas de grupo, entrevistas e verificação de referências, escolhe-se o profissional com melhor adequação ao cargo e à cultura da empresa.',
    whereUsed: 'Alinhamento final entre RH e gestor da vaga, emissão da Carta Proposta (Job Offer).',
    practicalExample: 'Comparar o score dos 3 finalistas e aprovar o candidato que demonstrou melhor domínio técnico e empatia com a equipe.',
    type: 'conceito'
  },
  {
    id: 'competencias-tecnicas',
    worldId: 'mundo-3',
    term: 'Competências Técnicas (Hard Skills)',
    shortDef: 'Habilidades tangíveis, conhecimentos práticos e qualificações formais aprendidas.',
    fullDef: 'Capacidades quantificáveis e ensináveis: domínio de Excel, conhecimento em cálculo de folha, legislação trabalhista, fluência em inglês, operação de maquinário ou linguagens de programação.',
    whereUsed: 'Requisitos do cargo, testes práticos de nivelamento e provas técnicas.',
    practicalExample: 'Saber operar o sistema ERP da empresa e calcular corretamente uma rescisão contratual.',
    type: 'conceito'
  },
  {
    id: 'competencias-comportamentais',
    worldId: 'mundo-3',
    term: 'Competências Comportamentais (Soft Skills)',
    shortDef: 'Atributos pessoais, emocionais e relacionais de convivência e trabalho em equipe.',
    fullDef: 'Habilidades interpessoais: comunicação assertiva, resiliência, liderança, adaptabilidade a mudanças, empatia, ética profissional e inteligência emocional.',
    whereUsed: 'Dinâmicas de grupo, testes de perfil comportamental (DISC) e entrevistas com RH.',
    practicalExample: 'Capacidade de dialogar com calma e esclarecer dúvidas de um funcionário insatisfeito com um desconto.',
    type: 'conceito'
  },
  {
    id: 'admissao',
    worldId: 'mundo-3',
    term: 'Admissão',
    shortDef: 'Formalização jurídica e burocrática da contratação do novo colaborador.',
    fullDef: 'Etapa que conecta R&S ao Departamento Pessoal: envio de documentos, exame médico admissional (ASO), assinatura de contrato e CTPS Digital, e envio do evento S-2200 ao eSocial antes do início das atividades.',
    whereUsed: 'Cadastro no sistema de DP, assinatura do contrato e onboarding.',
    practicalExample: 'O colaborador entrega os documentos, realiza o ASO na clínica conveniada e tem seu registro concluído antes do 1º dia de trabalho.',
    type: 'conceito'
  },

  // ==========================================
  // MUNDO 04: TREINAMENTO E DESENVOLVIMENTO
  // ==========================================
  {
    id: 'lnt',
    worldId: 'mundo-4',
    term: 'LNT (Levantamento de Necessidades)',
    shortDef: 'Diagnóstico das carências e lacunas de competências que exigem ações de capacitação.',
    fullDef: 'Processo investigativo estruturado pelo RH para descobrir quais equipes ou funções precisam de aprimoramento de habilidades, baseado em erros frequentes, metas não atingidas ou inovações tecnológicas.',
    whereUsed: 'Planejamento estratégico anual de RH e orçamento de treinamentos.',
    practicalExample: 'Identificar que 40% das rescisões estão com erros de cálculo e diagnosticar que a equipe de DP precisa de curso de atualização da CLT.',
    type: 'conceito'
  },
  {
    id: 'capacitacao',
    worldId: 'mundo-4',
    term: 'Capacitação',
    shortDef: 'Ação instrucional focada em ensinar uma habilidade específica de aplicação imediata no cargo.',
    fullDef: 'Processo de curto prazo destinado a transmitir conhecimentos e técnicas para que o empregado execute suas funções atuais com eficiência e sem erros.',
    whereUsed: 'Cursos internos, workshops, treinamentos operacionais e instrução de trabalho.',
    practicalExample: 'Treinar a equipe de atendimento sobre o novo software de chamados durante 3 dias.',
    type: 'conceito'
  },
  {
    id: 'desenvolvimento-profissional',
    worldId: 'mundo-4',
    term: 'Desenvolvimento Profissional',
    shortDef: 'Processo contínuo de amadurecimento e crescimento de carreira a médio e longo prazo.',
    fullDef: 'Conjunto de experiências, mentorias e estudos que preparam o profissional para assumir novos papéis, lideranças e responsabilidades futuras mais complexas na organização.',
    whereUsed: 'Plano de Desenvolvimento Individual (PDI), programas de mentoria e formação de sucessores.',
    practicalExample: 'Acompanhar um analista júnior durante dois anos com desafios graduais e mentoria executiva para que ele se torne coordenador.',
    type: 'conceito'
  },
  {
    id: 'avaliacao-de-desempenho',
    worldId: 'mundo-4',
    term: 'Avaliação de Desempenho',
    shortDef: 'Método sistemático de mensuração das entregas e comportamentos dos colaboradores.',
    fullDef: 'Ferramenta periódica (90 graus, 180 graus ou 360 graus) que afere o alcance de metas, competências técnicas e comportamentais, gerando subsídios para feedbacks, promoções e LNT.',
    whereUsed: 'Ciclo anual ou semestral de gestão de pessoas e reuniões de feedback 1:1.',
    practicalExample: 'O gestor e os pares avaliam pontualidade, liderança e resolução de problemas do funcionário nos últimos 6 meses.',
    type: 'conceito'
  },
  {
    id: 'plano-de-treinamento',
    worldId: 'mundo-4',
    term: 'Plano de Treinamento',
    shortDef: 'Documento estruturado que define cronograma, recursos, instrutores e metas das capacitações.',
    fullDef: 'Roteiro executivo elaborado após a LNT contendo: objetivos de aprendizagem, público-alvo, carga horária, modalidade (presencial/EAD), instrutores, custo estimado e métricas de ROI.',
    whereUsed: 'Gestão da Universidade Corporativa e governança de T&D.',
    practicalExample: 'Calendário anual de cursos com datas, responsáveis e metas de participação por setor.',
    type: 'conceito'
  },
  {
    id: 'clima-organizacional',
    worldId: 'mundo-4',
    term: 'Clima Organizacional',
    shortDef: 'Percepção coletiva e temporária que os colaboradores têm sobre o ambiente de trabalho.',
    fullDef: 'A atmosfera emocional da empresa no dia a dia. É volátil e influenciado por fatores como políticas salariais, relações com lideranças, ergonomia, estresse e reconhecimento.',
    whereUsed: 'Pesquisa de Clima Organizacional (eNPS) e planos de ação para engajamento.',
    practicalExample: 'Uma pesquisa aponta que 80% dos funcionários estão desmotivados com a comunicação da liderança, exigindo intervenção rápida do RH.',
    type: 'conceito'
  },
  {
    id: 'cultura-organizacional',
    worldId: 'mundo-4',
    term: 'Cultura Organizacional',
    shortDef: 'Conjunto profundo de valores, crenças, tradições e normas compartilhadas na empresa.',
    fullDef: 'A "personalidade" ou "DNA" da organização. É profunda, resistente a mudanças rápidas e orienta como as pessoas tomam decisões, se vestem e tratam clientes e colegas ("o que fazemos quando ninguém está olhando").',
    whereUsed: 'Manual do colaborador, código de conduta e direcionamento estratégico.',
    practicalExample: 'Uma cultura que valoriza autonomia e transparência incentiva colaboradores a testarem novas ideias sem medo de punição.',
    type: 'conceito'
  },

  // ==========================================
  // MUNDO 05: DEPARTAMENTO PESSOAL
  // ==========================================
  {
    id: 'registro-do-funcionario',
    worldId: 'mundo-5',
    term: 'Registro do Funcionário',
    shortDef: 'Anotação obrigatória da contratação em livro, fichas ou sistema eletrônico (eSocial).',
    fullDef: 'Obrigação imposta pelo art. 41 da CLT. O empregador deve registrar cargo, salário, data de admissão, jornada e qualificações do trabalhador até um dia antes do início das atividades pelo eSocial.',
    whereUsed: 'Sistema de DP, CTPS Digital e livro de registros da empresa.',
    practicalExample: 'Falta de registro sujeita a empresa a multas administrativas pesadas aplicadas pela Fiscalização do Trabalho.',
    type: 'obrigacao'
  },
  {
    id: 'jornada-de-trabalho',
    worldId: 'mundo-5',
    term: 'Jornada de Trabalho',
    shortDef: 'Período diário e semanal no qual o empregado permanece à disposição do empregador.',
    fullDef: 'O limite padrão constitucional é de 8 horas diárias e 44 horas semanais (ou escala 12x36, turnos ininterruptos de 6h). O que passar disso é considerado hora extraordinária.',
    whereUsed: 'Contrato de trabalho, escala de revezamento e controle de frequência.',
    practicalExample: 'Jornada de segunda a sexta-feira das 08h às 17h48 com 1h de intervalo para almoço (totalizando 44h semanais).',
    type: 'conceito'
  },
  {
    id: 'controle-de-ponto',
    worldId: 'mundo-5',
    term: 'Controle de Ponto',
    shortDef: 'Registro eletrônico, mecânico ou manual das entradas, intervalos e saídas do trabalhador.',
    fullDef: 'Obrigatório para estabelecimentos com mais de 20 funcionários (art. 74, §2º da CLT). Regulamentado pela Portaria MTP 671/2021 (REP-C, REP-A, REP-P), serve para comprovar assiduidade e horas extras.',
    whereUsed: 'Relógio de ponto biométrico/facial, aplicativo de ponto e espelho mensal de ponto.',
    practicalExample: 'O colaborador registra o ponto por reconhecimento facial no início do turno, no almoço e no término da jornada.',
    type: 'procedimento'
  },
  {
    id: 'ferias',
    worldId: 'mundo-5',
    term: 'Férias',
    shortDef: 'Descanso anual remunerado de 30 dias acrescido do terço constitucional.',
    fullDef: 'A cada 12 meses de trabalho (Período Aquisitivo), o empregado adquire direito a 30 dias de descanso (Período Concessivo), que devem ser pagos até 2 dias antes do início com acréscimo de 1/3 (CF art. 7º, XVII).',
    whereUsed: 'Aviso e recibo de férias, escala anual de férias do DP.',
    practicalExample: 'Quem ganha R$ 3.000,00 recebe R$ 3.000 + R$ 1.000 (1/3 constitucional) = R$ 4.000 brutos para usufruir de suas férias.',
    type: 'provento'
  },
  {
    id: 'decimo-terceiro',
    worldId: 'mundo-5',
    term: '13º Salário (Gratificação Natalina)',
    shortDef: 'Gratificação anual compulsória equivalente a 1/12 da remuneração por mês trabalhado.',
    fullDef: 'Instituído pela Lei 4.090/62. Pago em duas parcelas: 1ª parcela (50% do salário, sem descontos) entre fevereiro e 30 de novembro; 2ª parcela (com desconto de INSS e IRRF) até 20 de dezembro.',
    whereUsed: 'Folha de pagamento de novembro e folha específica do 13º em dezembro.',
    practicalExample: 'Trabalhar 15 dias ou mais em um mês civil já garante direito à fração de 1/12 da gratificação natalina.',
    type: 'provento'
  },
  {
    id: 'beneficios',
    worldId: 'mundo-5',
    term: 'Benefícios Corporativos',
    shortDef: 'Vantagens e facilidades adicionais concedidas ao empregado além do salário em dinheiro.',
    fullDef: 'Podem ser legais (obrigatórios por lei, como VT e férias) ou espontâneos/convencionais (VR, VA, plano de saúde, seguro de vida, auxílio-creche, previdência privada, ginástica laboral).',
    whereUsed: 'Pacote de remuneração total e atração de talentos.',
    practicalExample: 'Oferecer plano odontológico sem coparticipação como diferencial de retenção no mercado.',
    type: 'beneficio'
  },
  {
    id: 'obrigacoes-trabalhistas',
    worldId: 'mundo-5',
    term: 'Obrigações Trabalhistas e Fiscais',
    shortDef: 'Deveres burocráticos e declarações oficiais que a empresa deve cumprir perante o Estado.',
    fullDef: 'Conjunto de rotinas legais: envio de eventos periódicos e não periódicos ao eSocial, DCTFWeb para emissão da guia de tributos, recolhimento de FGTS Digital, emissão de CAT e cumprimento de NRs.',
    whereUsed: 'Calendário de fechamento de DP e fiscalização trabalhista.',
    practicalExample: 'Fechar a folha de pagamento e transmitir os dados para a DCTFWeb até o dia 15 de cada mês.',
    type: 'obrigacao'
  },

  // ==========================================
  // MUNDO 06: RESCISÃO CONTRATUAL
  // ==========================================
  {
    id: 'demissao-sem-justa-causa',
    worldId: 'mundo-6',
    term: 'Demissão sem Justa Causa',
    shortDef: 'Rompimento do contrato por iniciativa do empregador sem motivo disciplinar.',
    fullDef: 'O empregado tem direito ao pacote rescisório integral: saldo de salário, aviso-prévio (trabalhado ou indenizado), 13º proporcional, férias vencidas e proporcionais com 1/3, saque do FGTS com multa de 40% e seguro-desemprego.',
    whereUsed: 'Termo de Rescisão do Contrato de Trabalho (TRCT).',
    practicalExample: 'A empresa faz um corte de custos e demite o analista, pagando todas as verbas rescisórias e a multa de 40% do FGTS.',
    type: 'modalidade-rescisao'
  },
  {
    id: 'pedido-de-demissao',
    worldId: 'mundo-6',
    term: 'Pedido de Demissão',
    shortDef: 'Ruptura contratual por iniciativa própria do empregado.',
    fullDef: 'O trabalhador decide sair da empresa. Recebe saldo de salário, férias vencidas e proporcionais (+1/3) e 13º proporcional. NÃO tem direito ao saque do FGTS, nem à multa rescisória, nem ao seguro-desemprego, devendo cumprir ou indenizar o aviso-prévio.',
    whereUsed: 'Carta de próprio punho do empregado e homologação rescisória.',
    practicalExample: 'Um colaborador recebe proposta melhor e pede demissão, cumprindo 30 dias de aviso para treinar seu substituto.',
    type: 'modalidade-rescisao'
  },
  {
    id: 'justa-causa',
    worldId: 'mundo-6',
    term: 'Demissão com Justa Causa',
    shortDef: 'Punição máxima aplicada ao empregado por falta grave prevista no art. 482 da CLT.',
    fullDef: 'Motivos legais: desídia (negligência reiterada), improbidade (furto, fraude), incontinência de conduta, embriaguez em serviço, indisciplina ou insubordinação. O empregado só recebe saldo de salário e férias vencidas (+1/3). Perde todo o resto.',
    whereUsed: 'Processo disciplinar com provas robustas (advertências, suspensões) e TRCT.',
    practicalExample: 'Funcionário comete fraude comprovada no sistema de notas fiscais e é demitido por ato de improbidade.',
    type: 'modalidade-rescisao'
  },
  {
    id: 'aviso-previo',
    worldId: 'mundo-6',
    term: 'Aviso-prévio',
    shortDef: 'Comunicação antecipada de encerramento do contrato de trabalho.',
    fullDef: 'Pela Lei nº 12.506/2011, é proporcional ao tempo de serviço: 30 dias para até 1 ano, acrescidos de 3 dias por ano completo de serviço na mesma empresa, até o teto de 90 dias. Pode ser trabalhado (com redução de 2h/dia ou 7 dias) ou indenizado.',
    whereUsed: 'Comunicação de rescisão e cálculo rescisório no TRCT.',
    practicalExample: 'Empregado com 3 anos de casa tem direito a 39 dias de aviso-prévio (30 dias base + 3x3 dias).',
    type: 'verba-rescisoria'
  },
  {
    id: 'saldo-de-salario',
    worldId: 'mundo-6',
    term: 'Saldo de Salário',
    shortDef: 'Pagamento proporcional aos dias trabalhados no mês em que ocorreu a rescisão.',
    fullDef: 'Valor correspondente aos dias do mês da demissão até a data de desligamento efetivo (incluindo a projeção do aviso, se indenizado).',
    whereUsed: 'Primeira verba rescisória listada no TRCT.',
    practicalExample: 'Desligado em 18 de março: recebe 18/30 avos do salário daquele mês.',
    type: 'verba-rescisoria'
  },
  {
    id: 'ferias-vencidas',
    worldId: 'mundo-6',
    term: 'Férias Vencidas',
    shortDef: 'Férias já adquiridas por completar o período de 12 meses, mas ainda não gozadas.',
    fullDef: 'Direito adquirido do trabalhador. Devem ser pagas integralmente na rescisão acrescidas do terço constitucional (1/3), independentemente do tipo de demissão (inclusive justa causa).',
    whereUsed: 'Campo de verbas rescisórias do TRCT.',
    practicalExample: 'Quem completou o ano aquisitivo e não tirou férias recebe o valor de 1 salário integral + 1/3 na saída.',
    type: 'verba-rescisoria'
  },
  {
    id: 'ferias-proporcionais',
    worldId: 'mundo-6',
    term: 'Férias Proporcionais',
    shortDef: 'Fração de férias referente aos meses trabalhados no período aquisitivo incompleto.',
    fullDef: 'Calculadas na proporção de 1/12 por mês trabalhado (ou fração igual ou superior a 15 dias de trabalho), acrescidas de 1/3 constitucional. Não são devidas em caso de justa causa.',
    whereUsed: 'Campo de verbas rescisórias do TRCT.',
    practicalExample: 'Trabalhou 5 meses e 20 dias após as últimas férias: tem direito a 6/12 avos de férias proporcionais + 1/3.',
    type: 'verba-rescisoria'
  },
  {
    id: 'decimo-terceiro-proporcional',
    worldId: 'mundo-6',
    term: '13º Salário Proporcional',
    shortDef: 'Fração do 13º salário devida proporcionalmente aos meses trabalhados no ano civil da rescisão.',
    fullDef: 'Calculado à razão de 1/12 da remuneração por mês com 15 dias ou mais de trabalho entre 1º de janeiro e a data de desligamento (com projeção de aviso indenizado). Não é devido na justa causa.',
    whereUsed: 'Campo de verbas rescisórias do TRCT.',
    practicalExample: 'Saída em 22 de abril: tem direito a 4/12 avos do 13º salário anual.',
    type: 'verba-rescisoria'
  },
  {
    id: 'multa-fgts',
    worldId: 'mundo-6',
    term: 'Multa Rescisória do FGTS (40%)',
    shortDef: 'Indenização compensatória de 40% sobre o saldo total dos depósitos do FGTS na demissão sem justa causa.',
    fullDef: 'Quando o empregador demite sem justa causa, deve pagar 40% sobre o montante de todos os depósitos realizados durante a vigência do contrato, inclusive os já sacados anteriormente pelo trabalhador.',
    whereUsed: 'Guia rescisória do FGTS (GRRF/FGTS Digital) e saque via chave de conectividade.',
    practicalExample: 'Se o saldo de depósitos na conta vinculada somou R$ 10.000,00, a empresa deve pagar R$ 4.000,00 de multa rescisória.',
    type: 'verba-rescisoria'
  },
  {
    id: 'verbas-rescisorias',
    worldId: 'mundo-6',
    term: 'Verbas Rescisórias',
    shortDef: 'Conjunto de todos os valores financeiros pagos ao trabalhador ao término da relação empregatícia.',
    fullDef: 'Totalização das quantias devidas no encerramento do contrato. O prazo de pagamento legal é de até 10 dias corridos após o término do contrato (art. 477, § 6º da CLT), sob pena de multa de 1 salário em favor do empregado.',
    whereUsed: 'Homologação do TRCT, quitação final do contrato e eSocial (S-2299).',
    practicalExample: 'Somatório de saldo de salário, aviso prévio, férias proporcionais, férias vencidas e 13º proporcional menos descontos legais.',
    type: 'conceito'
  }
];

export function getGlossaryById(id) {
  return GLOSSARY_DATA.find(item => item.id === id);
}

export function getGlossaryByWorld(worldId) {
  return GLOSSARY_DATA.filter(item => item.worldId === worldId);
}
