const interpret = (command) => {
  let code = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] == "G") {
      code += "G";
    } else if (command[i] == "(" && command[i + 1] == ")") {
      code += "o";
    } else if(command[i] == "(" && command[i+1] == "a" && command[i+2] == "l"&& command[i + 3] == ")") {
      code += "al";
    }
  }
  return code;
};
