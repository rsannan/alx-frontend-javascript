export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const val = mathFunction();
    queue.push(val, 'Guardrail was processed');
  } catch (e) {
    queue.push(`Error: ${e.message}`, 'Guardrail was processed');
  }
  return queue;
}
