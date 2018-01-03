import { typeOf } from '@ember/utils';
import { helper } from '@ember/component/helper';

export function paddingTo([ string, desiredLength ]) {
  if( ! typeOf( desiredLength, "number" ) )
    return "";
  const currentLength = string.length;
  let paddingString = "";
  for( let i = currentLength; i < desiredLength; i++ )
    paddingString += " ";

  return paddingString;
}

export default helper(paddingTo);
