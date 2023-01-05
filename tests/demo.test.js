describe('Test en <DemoComponent/>', () => {
  test('This does not work',  () => {
    //1. inicialización
    const m1 = 'Hello World!';
    //2. Estimulo
    const m2 = m1.trim();
    //3. Observar el comportamiento
    expect(m1).toBe(m2);
  })
})