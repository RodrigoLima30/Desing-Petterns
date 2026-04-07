import { ColarCommand } from "./colar.command";
import { CopiarCommand } from "./copiar.command";
import { Documento } from "./documento";
import { Formatador } from "./formatador";
import { InserirTextoCommand } from "./inserir-texto.command";
import { MacroRecorder } from "./macro-recorder";
import { NegritoCommand } from "./negrito.command";
import { Toolbar } from "./toolbar";
import { AreaTransferencia } from "./transfer-area";


const doc = new Documento();
const clipboard = new AreaTransferencia();
const formatador = new Formatador();

const toolbar = new Toolbar();
const macro = new MacroRecorder();

// comandos
const inserir = new InserirTextoCommand(doc, "Olá ");
const copiar = new CopiarCommand(doc, clipboard);
const colar = new ColarCommand(doc, clipboard);
const negrito = new NegritoCommand(doc, formatador);

// toolbar
const id1 = toolbar.setComando(inserir);
const id2 = toolbar.setComando(copiar);
const id3 = toolbar.setComando(colar);

// uso
toolbar.clicar(id1);
toolbar.clicar(id2);
toolbar.clicar(id3);

// macro
macro.gravar(inserir);
macro.gravar(negrito);

macro.executar();
