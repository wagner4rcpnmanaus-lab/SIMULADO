# Questões FCC Premium

Gerador de questões inéditas de **nível médio no estilo FCC (Fundação Carlos Chagas)**, com:

- **Pesquisa dos assuntos mais cobrados** da matéria informada nos grandes portais de concursos (Estratégia, TEC Concursos, QConcursos, Gran Cursos, Direção, PCI, AlfaCon etc.).
- **Geração de questões** com 5 alternativas (A–E), nos formatos típicos da banca (letra da lei, situações hipotéticas, itens I/II/III, lacunas).
- **Correção comentada criteriosa** após a resposta: gabarito, comentário resumido, fundamentação legal com link para o texto oficial (Planalto), transcrição da letra da lei, análise de todas as alternativas e dica FCC.
- Escolha de **quantas questões gerar por vez** (1 a 50) e do **modo de correção** (Estudo: comentário a cada questão; Simulado: correção ao final).
- Histórico com desempenho por simulado.

## Motores (variáveis de ambiente opcionais)

O sistema funciona sem nenhuma chave: usa um **banco curado** (45 questões com letra da lei conferida), uma **IA gratuita** (precisão limitada, sinalizada na interface) e buscadores gratuitos. Para questões inéditas ilimitadas e síntese automática das fontes, configure **uma** das chaves abaixo:

| Variável | Provedor | Modelo padrão (sobrescreva com `*_MODEL`) |
| --- | --- | --- |
| `OPENAI_API_KEY` | OpenAI | `gpt-4.1-mini` (`OPENAI_MODEL`) |
| `GEMINI_API_KEY` | Google Gemini | `gemini-2.5-flash` (`GEMINI_MODEL`) |
| `ANTHROPIC_API_KEY` | Anthropic Claude | `claude-sonnet-4-5` (`ANTHROPIC_MODEL`) |
| `GROQ_API_KEY` | Groq | `llama-3.3-70b-versatile` (`GROQ_MODEL`) |
| `OPENROUTER_API_KEY` | OpenRouter | `openai/gpt-4.1-mini` (`OPENROUTER_MODEL`) |
| `DEEPSEEK_API_KEY` | DeepSeek | `deepseek-chat` (`DEEPSEEK_MODEL`) |

`AI_PROVIDER` força um provedor específico quando houver mais de uma chave. `DISABLE_FREE_AI=1` desativa a IA gratuita.

Busca mais estável nos portais (opcional): `TAVILY_API_KEY`, `SERPER_API_KEY` ou `BRAVE_SEARCH_API_KEY`.

## Segurança do gabarito

O gabarito e os comentários **nunca** são enviados ao navegador antes da resposta: a API só os libera após a resposta (modo Estudo) ou a finalização (modo Simulado).
