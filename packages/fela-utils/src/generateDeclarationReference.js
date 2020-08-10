/* @flow */
export default function generateDeclarationReference(
  property: string,
  value: any,
  pseudo?: string = '',
  media?: string = '',
  support?: string = ''
): string {
  return support + media + pseudo + property + value
}
