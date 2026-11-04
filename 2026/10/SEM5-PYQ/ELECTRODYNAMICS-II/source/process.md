# process.md: the source folder (overview)

This folder holds everything the notes, papers and book excerpts are built from. Use this file to find the right process for a task. Each process file below says how to do its task in detail.

## What is here
| Path | What it holds | Which process applies |
|---|---|---|
| `books/` | Book excerpts (`Griffiths-5ed_Module1_excerpt.html`, `Griffiths-5ed_Module2_excerpt.html`), `index.md` | `books/process.md` (PDF to HTML excerpts) |
| `books/prepare/` | One folder per module with its notes, pre files, figures and PDFs | `books/prepare/process.md` (overview), then the module's own process |
| `pyq/` | The seven CBCSS papers (HTML transcriptions), the Module 1 and Module 2 PYQ and model papers, and their builders | `pyq/process.md` (exam papers) |

## Which process to use
1. **Converting a book page range to HTML** (sheets, transcription, figures, checks): `books/process.md`.
2. **Writing notes for a module** (book sources, study and structured bodies, figures, combined PDFs): `books/prepare/process.md`, then `books/prepare/module-1/process.md` for the general method and `books/prepare/module-2/process.md` for Module 2's commands.
3. **Making a PYQ or a model question paper**: `pyq/process.md`.
4. **Anything about the whole folder structure, rules, or module status**: `../CLAUDE.md`.

## Rules that apply everywhere in `source/`
- Put working files in the session scratchpad, not here. Hidden scratch files in `pyq/` (`.txt_*.txt`) are the only exception, and they can be deleted.
- Do not delete a source PDF or an excerpt unless the user asks.
- Nothing is mailed before its checks have run (see `books/prepare/module-1/process.md`, section 17.1).
- A file that is superseded is kept, listed in its module's `process.md`, and deleted only when the user asks.
