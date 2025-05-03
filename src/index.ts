// index.ts
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Pega o caminho absoluto da pasta exercicios
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const exerciciosPath = path.join(__dirname, "exercises");

interface ImportarTodosExercicios {
  (): Promise<void>;
}

const importarTodosExercicios: ImportarTodosExercicios = async () => {
  const arquivos: string[] = await readdir(exerciciosPath);
  const tsFiles: string[] = arquivos.filter((file: string) =>
    file.endsWith(".ts")
  );

  for (const file of tsFiles) {
    const caminhoAbsoluto: string = path.join(exerciciosPath, file);
    await import(caminhoAbsoluto);
  }
};

importarTodosExercicios();
