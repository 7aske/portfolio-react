import c from "../../../assets/images/lang/c.png";
import py from "../../../assets/images/lang/python.png";
import go from "../../../assets/images/lang/golang.png";
import js from "../../../assets/images/lang/js.png";
import ts from "../../../assets/images/lang/ts.png";
import rust from "../../../assets/images/lang/rust.png";
import { projFmt } from "../utils/Utils";

export const projects: Project[] = [
	{
		img: c,
		type: "C",
		name: "ccont",
		description: "Docker-like linux chroot container system with ability to build your custom containers to run apps in",
		repository: "https://github.com/7aske/ccont",
		username: "7aske",
	}, {
		img: c,
		type: "C",
		name: "agame",
		description: "SDL2 game with fancy graphics, smart-ish enemies and randomly generated mazes",
		repository: "https://github.com/7aske/agame",
		username: "7aske",
	}, {
		img: c,
		type: "C",
		name: "c_orm",
		description: "Auto generating C headers for a given DDL(database scheme) with generated functions for each to quickly bootstrap CRUD applications. Example project representing a system of libraries and their books.",
		repository: "https://github.com/7aske/c_library_orm",
		username: "7aske",
	}, {
		img: rust,
		type: "RUST",
		name: "rgs",
		description: "rgs (recheck-git-status) is a simple tool for us forgetful people. Namely what the tool does is checks a folder with git repositories for ones that have been changed but not committed. All that to avoid unnecessary merges and conflicts. Originally cgs, written in C.",
		repository: "https://github.com/7aske/rgs",
		username: "7aske",
	}, {
		img: py,
		type: "PY",
		name: "instapy-bot",
		description: "CLI bot for automated and scheduled Instagram photos uploading using instagrams private API. Uploading via private API was made possible by using slightly modified version of instapy-cli by b3nab.",
		repository: "https://github.com/7aske/instapy-bot",
		username: "7aske",
	}, {
		img: go,
		type: "GO",
		name: "goose",
		description: "Custom web-server tooled to easily deploy other web based projects (apps) using Git, inspired by Heroku. Goose is designed to be a lightweight and simple to use.",
		repository: "https://github.com/7aske/goose",
		username: "7aske",
	}, {
		img: go,
		type: "GO",
		name: "go-serve",
		description: "HTTP file system server with live reload",
		repository: "https://github.com/7aske/go-serve",
		username: "7aske",
	}, {
		img: js,
		type: "JS",
		name: "boat",
		description: "Small electron based borderless floating browser inspired by pennywise. Why is it named boat? Well boats float... Most of the time at least.",
		repository: "https://github.com/7aske/boat",
		username: "7aske",
	}, {
		img: ts,
		type: "TS",
		name: "sh",
		description: "Tiny webserver that serves my dotfiles and shell scripts for easy curl-ing on remote machines",
		repository: "https://github.com/7aske/sh",
		username: "7aske",
	}
];

// language=TEXT
let cSourceCode = `
/*
 * Here you can find some of the more notable projects I had
 * worked on. Projects have links to their respective repos.
 */

enum LANG { C, PY, GO, JS, TS, RUST, CPP, JAVA };

typedef struct project {
  enum LANG lang;
  char name[32];
  char desc[512];
  char repo[64];
  char user[16];
} proj_t;

static proj_t projects[${projects.length}] = {
   ${projects.map(proj => projFmt(proj, "c")).join(", ")}
};
`;

// language=TEXT
let rustSourceCode = `
///
/// Here you can find some of the more notable projects I had
/// worked on. Projects have links to their respective repos.
///

enum Lang { C, PY, GO, JS, TS, RUST, CPP, JAVA }

struct Project {
  lang: Lang,
  name: &'static str,
  desc: &'static str,
  repo: &'static str,
}

static PROJECTS: &[Project] = &[
    ${projects.map(proj => projFmt(proj, "rust")).join(", ")}
];
`;
// language=TEXT
let pySourceCode = `
#
# Here you can find some of the more notable projects I had
# worked on. Projects have links to their respective repos.
#

import enum
class Lang(enum.Enum):
  C    = 0
  PY   = 1
  GO   = 2
  JS   = 3
  TS   = 4
  RUST = 5
  CPP  = 6
  JAVA = 7

class Project:
  def __init__(self, lang, name, desc, repo):
    self.lang = lang
    self.name = name
    self.desc = desc
    self.repo = repo

projects = [
  ${projects.map(proj => projFmt(proj, "python")).join(", ")}
]
`;

// language=TEXT
let goSourceCode = `
//
// Here you can find some of the more notable projects I had
// worked on. Projects have links to their respective repos.
//

type Lang string

const (
  C       Lang = "c"
  Python  Lang = "python"
  Go      Lang = "go"
  Js      Lang = "js"
  Ts      Lang = "ts"
  Rust    Lang = "rust"
  Cpp     Lang = "cpp"
  Java    Lang = "java"
)

type Project struct {
  Language     Lang
  Name         string
  Description  string
  Repository   string
}

var Projects = []Project{
  ${projects.map(proj => projFmt(proj, "go")).join(" ")}
}
`;

// language=TEXT
let shSourceCode = `
#
# Here you can find some of the more notable projects I had
# worked on. Projects have links to their respective repos.
#

${projects.map(proj => projFmt(proj, "bash")).join("\n")}
`;

export const projectsSourceCode: { [key: string]: string } = {
	c: cSourceCode,
	rust: rustSourceCode,
	python: pySourceCode,
	go: goSourceCode,
	bash: shSourceCode,
};
