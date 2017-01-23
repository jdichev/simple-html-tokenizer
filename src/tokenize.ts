import Tokenizer, { TokenizerOptions } from "./tokenizer";
import EntityParser from "./entity-parser";
import namedCharRefs from "./html5-named-char-refs";

export default function tokenize(input: string, options?: TokenizerOptions) {
  let tokenizer = new Tokenizer(new EntityParser(namedCharRefs), options);
  return tokenizer.tokenize(input);
}
