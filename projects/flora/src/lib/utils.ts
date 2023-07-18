// uuidv4 generator. Warning: Don't use for sensetive operations as it might not be safe
export function weakUUIDv4(): any {
  // @ts-ignore: This thing works, but TS doesn't like it
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    // tslint:disable-next-line: no-bitwise
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

// Generate a "random" id for an input tag
export function inputId(seed: string): any {
  return seed + '-' + weakUUIDv4();
}
