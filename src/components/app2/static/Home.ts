import { socialMedia } from "./Social";
import { socialFmt } from "../utils/Utils";

export const greetingMessage = "Hi! Welcome to my portfolio website. As you can see it is designed to mimic Python code. It might be scary but if you're here you already know as thing or two about programming. Toolbar is done through the 'include' preprocessor directives and all underlined text has a clickable action. If you have any suggestions or problems feel free to contact me through 'contact.h' or at social media sites linked below.";

// language=TEXT
let cSourceCode = `
static const char greeting_message[1024] = "${greetingMessage}";  

typedef struct social { char name[64]; char url[128]; } social_t;

static social_t socials[${socialMedia.length}] = ${socialMedia.map(soc => socialFmt(soc, "c"))}

int main(void) {
  fputs(greeting_message, stdout);
  printf("Hello, World!\\n");
  return 0;
}
`;

// language=TEXT
let rsSourceCode = `
static GREETING_MESSAGE: &str = "${greetingMessage}";  

struct Social { name: &'static str, url: &'static str }

static SOCIALS: &[Social] = &[
  ${socialMedia.map(soc => socialFmt(soc, "rust"))}
];

fn main() {
  println!("{}", GREETING_MESSAGE);
  println!("Hello, World!");
}
`;

// language=TEXT
let pySourceCode = `
greeting_message = """${greetingMessage}"""

class Social:
  def __init__(self, name, url):
    self.name = name
    self.url = url

socials = [
  ${socialMedia.map(soc => socialFmt(soc, "python"))}
]

def main():
  print(greeting_message)
  print("Hello, World!")

if __name__ == "__main__":
  main()
`;

export const homeSourceCode: { [key: string]: string } = {
	c: cSourceCode,
	rust: rsSourceCode,
	python: pySourceCode,
};

