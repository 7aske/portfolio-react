// language=TEXT
let cSourceCode = `
/*
 * @param 'name'    - Your name.
 * @param 'email'   - Your email so I can respond back.
 * @param 'message' - Message you're sending me.
 */
extern int send_message(char* name, char* email, char* message);

static int contact_me(){
  int retval;
  char* /*TOOLTIP[$Write your name between the quotation marks$,$name$]*/ = \n\t"/*INPUT[$text$,$name$]*/";
  char* /*TOOLTIP[$Write your email between the quotation marks$,$email$]*/ = \n\t"/*INPUT[$text$,$email$]*/";
  char* /*TOOLTIP[$Write your message text below$,$message$]*/ = \n\t"/*TEXTAREA[$message$]*/";
/*
 * After filling the required data tap on the
 * 'send_message' function call to submit!
 */
  retval = /*BUTTON[$send_message$,$submit$]*/(name, email, message);
  
  if (retval){
    fputs("Message sent!", stdout);
  } else {
    fputs("Sending message failed!", stderr);
  }
  return retval;
}`;

// language=TEXT
let rsSourceCode = `
/// 
///  @param 'name'    - Your name.
///  @param 'email'   - Your email so I can respond back.
///  @param 'message' - Message you're sending me.
///
fn send_message(name: &str, email: &str, message: &str) -> Result<(), Error>{}

fn contact_me(){
  let /*TOOLTIP[$Write your name between the quotation marks$,$name$]*/:&str = \n\t"/*INPUT[$text$,$name$]*/";
  let /*TOOLTIP[$Write your email between the quotation marks$,$email$]*/:&str = \n\t"/*INPUT[$text$,$email$]*/";
  let /*TOOLTIP[$Write your message text below$,$message$]*/:&str = \n\t"/*TEXTAREA[$message$]*/";
///
/// After filling the required data tap on the
/// 'send_message' function call to submit!
///
  match /*BUTTON[$send_message$,$submit$]*/(name, email, message) {
    Ok(_) => println!("Message sent!"),
    Err(_) => println!("Sending message failed!")
  }
}`;

// language=TEXT
let pySourceCode = `
def contact_me():
  /*TOOLTIP[$Write your name between the quotation marks$,$name$]*/ = """\n\t/*INPUT[$text$,$name$]*/"""
  /*TOOLTIP[$Write your email between the quotation marks$,$email$]*/ = """\n\t/*INPUT[$text$,$email$]*/"""
  /*TOOLTIP[$Write your message text below$,$message$]*/ = """\n\t/*TEXTAREA[$message$]*/"""

  """
    @param 'name'    - Your name.
    @param 'email'   - Your email so I can respond back.
    @param 'message' - Message you're sending me.
  """
  from portfolIO import send_message 
  try:
    #
    # After filling the required data tap on the
    # 'send_message' function call to submit!
    #
    /*BUTTON[$send_message$,$submit$]*/(name, email, message)
    print("Message sent!")
  except IOError:
    print("Sending message failed!")
`;

// language=TEXT
let goSourceCode = `
func ContactMe() (string, error) {
  // 'name'    - Your name.
  // 'email'   - Your email so I can respond back.
  // 'message' - Message you're sending me.
  /*TOOLTIP[$Write your name between the quotation marks$,$name$]*/ := \`\n\t/*INPUT[$text$,$name$]*/\`
  /*TOOLTIP[$Write your email between the quotation marks$,$email$]*/ := \`\n\t/*INPUT[$text$,$email$]*/\`
  /*TOOLTIP[$Write your message text below$,$message$]*/ := \`\n\t/*TEXTAREA[$message$]*/\`


  // After filling the required data tap on the
  // 'SendMessage' function call to submit!
  //
  err := requests./*BUTTON[$SendMessage$,$submit$]*/(name, email, message)
  if err != nil {
    return "Sending message failed!", err
  }  
  return "Message sent!", nil
}
`;

// language=TEXT
let shSourceCode = `
# sends message to the server using curl
send_message(){
  curl \\
    -H "Content-Type: application/json" \\
    -X POST \\
    -d "{\\"name\\":\\"$1\\",\\"email\\":\\"$2\\",\\"message\\":\\"$3\\"}" \\
    ${window.location.protocol}//${window.location.hostname}/mail/send
}
contact_me(){
  # 'name'    - Your name.
  # 'email'   - Your email so I can respond back.
  # 'message' - Message you're sending me.
  /*TOOLTIP[%Write your name between the quotation marks%,%NAME%]*/="$(cat << EOF\n    /*INPUT[%text%,%name%]*/\n  END\n  )"
  /*TOOLTIP[%Write your email between the quotation marks%,%EMAIL%]*/="$(cat << EOF\n    /*INPUT[%text%,%email%]*/\n  END\n  )"
  /*TOOLTIP[%Write your message text below%,%MESSAGE%]*/="$(cat << EOF\n    /*TEXTAREA[%message%]*/\n  EOF\n  )"


  # After filling the required data tap on the
  # 'send_message' function call to submit!
  #
  /*BUTTON[%send_message%,%submit%]*/ "$NAME" "$EMAIL" "$MESSAGE"
  if [ "$?" = 0 ]; then
    echo "Message sent!"
  elif
    echo "Message sending failed"
  fi
}
`;

export const contactSourceCode: { [key: string]: string } = {
	c: cSourceCode,
	rust: rsSourceCode,
	python: pySourceCode,
	go: goSourceCode,
	bash: shSourceCode,
};
