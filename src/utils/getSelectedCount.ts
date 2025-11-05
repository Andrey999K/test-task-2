// Функция для подсчёта на сколько вопросов даны ответы
export const getSelectedCount = (Obj: Record<string, string[]>) => {
  const selectAnswers = Object.entries(Obj).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        acc[key] = value; // +key превращает строку в число
      }
      return acc;
    },
    {} as Record<string, string[]>
  );
  return Object.keys(selectAnswers).length;
};
