interface BorderStyleModifierInterface {
  borderRadius: number;
}
export function getBorderStyleModifier<T extends BorderStyleModifierInterface>({
  ...props
}: T extends BorderStyleModifierInterface
  ? T
  : never): BorderStyleModifierInterface {
  const { borderRadius = 0 } = props;
  return {
    borderRadius,
  };
}
