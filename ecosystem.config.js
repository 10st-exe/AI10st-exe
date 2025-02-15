module.exports = {
  apps: [{
    name: "eliza",
    cwd: "./",
    script: "pnpm",
    args: ["--filter", "@elizaos/agent", "start", "--isRoot", "--characters=../characters/nomad.character.json"],
    interpreter: "none",
    env: {
      NODE_ENV: "production",
      NODE_VERSION: "23.3.0"
    },
    env_development: {
      NODE_ENV: "development",
      VERBOSE: "true",
      DEBUG: "eliza:*"
    }
  }]
}
