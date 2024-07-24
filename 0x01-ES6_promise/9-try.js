export default function guardrail(mathFunction) {
  const resultQueue = [];

  const executeFunction = () => {
    try {
      const result = mathFunction();
      resultQueue.push(result);
    } catch (err) {
      resultQueue.push(String(err));
    } finally {
      resultQueue.push('Guardrail was processed');
    }
  };

  executeFunction();
  return resultQueue;
}
