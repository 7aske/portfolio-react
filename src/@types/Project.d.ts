type ProjectType = "C" | "PY" | "JS" | "GO" | "RUST" | "CPP" | "TS"| "JAVA" | "BASH";

type Project = {
	img: string;
	type: ProjectType;
	name: string;
	description: string;
	repository: string;
	username: string;
}

