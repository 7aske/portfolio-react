import resume from "../../../assets/pdf/resume.pdf";
import { contactFmt, eduFmt } from "../utils/Utils";

export const aboutDescription = `Hi, my name is Nikola born on 24th of May 1995. I am your standard garden variety software nerd. That means if something has computer code in it, I have already read about it or tried to implement it myself. Among the huge range of my interests I would emphasize the server programming, networking and scripting languages as my strong points. Regarding Web development I had written servers in 6 technologies so far but I tend to default to Express.js or Flask for my day  to day needs. As for programming my go to languages are Go, C and Python. I have decent knowledge of Java and some others. Also I'm a Linux user and a big fan of Arch which I have installed on multiple machines. Aside from programming I do documentary photography and my photos are regularly uploaded to Instagram by my Python bot. Cycling is my go-to relaxation activity, helps me clear my head so I can solve problems better. I think I am honest, enthusiastic, easy to work with and more than willing to think outside of the box to solve any problem.`;

export const aboutEducation: Education[] = [
	{
		level: "elementary",
		institution: "“Vozd Karadjordje Nis”",
		grad_year: 2010,
	},
	{
		level: "high school",
		institution: "“Bora Stankovic Nis” - mathematics department",
		grad_year: 2014,
	},
	{
		level: "university",
		institution: "“Univerzitet Metropolitan Beograd” - software enineering",
	},
];

export const aboutContact: Contact[] = [
	{
		type: "address",
		value: "Cirila i Metodija 18/22 18000 Nis, Serbia",
	},
	{
		type: "phone",
		value: "+(381) 60 451 40 36",
	},
	{
		type: "email",
		value: "ntasic7@gmail.com",
	},
	{
		type: "email",
		value: "nikolatasic7@gmail.com",
	},

];

// language=TEXT
let cSourceCode = `
static char about[1024] = "${aboutDescription}";

typedef struct education {
  char level[64];
  char institution[128];
  struct tm grad_date;
} edu_t;

/*
 * You can download the copy of my resume by clicking on the function declaration.
 * @returns - returns the buffer containing the contents of file
 *            pointed to by'fileptr'
 */
extern void /*ANCHOR[$download_resume$,$${resume}$]*/(FILE* fileptr);

static edu_t education[${aboutEducation.length}] = {
  ${aboutEducation.map(edu => eduFmt(edu))}
}

typedef struct contact {
  char type[16];
  char value[64];
} contact_t;

static contact_t contact_info[${aboutContact.length}] = {
  ${aboutContact.map(c => contactFmt(c))}
}
`;


export const aboutSourceCode: { [key: string]: string } = {
	c: cSourceCode,
};

