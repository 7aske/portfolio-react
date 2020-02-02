type EducationLevel = "elementary" | "high school" | "university";

type Education = {
	level: EducationLevel;
	institution: string;
	grad_year?: number;
}

