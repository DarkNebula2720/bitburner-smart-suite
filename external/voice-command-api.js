// [External Hook - Simulated Stub]
// Real voice integration would use an API trigger from an external app

export function handleVoiceCommand(command) {
    switch(command.toLowerCase()) {
        case "start hacking": return "RUN autoHack.js";
        case "install augmentations": return "RUN install.js";
        case "reset bitnode": return "RUN reset-controller.js";
        default: return `Unknown command: ${command}`;
    }
}

