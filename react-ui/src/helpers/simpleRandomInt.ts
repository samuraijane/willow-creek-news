// based on a gist and comments at https://gist.github.com/6174/6062387

export const simpleRandomInt = () => {
  return Math.random().toString(16).substring(2, 15);
}