import * as React from 'react'

type Props = {
  task: Task
  onToggle: (id: number) => void
}

export default function ToDo({ task, onToggle }: Props) {
  // Il faut un ID unique pour lier le label et la checkbox
  const taskId = `task-${task.id}`

  return (
    <div className="py-1 flex justify-between items-center text-gray-700">
      <label
        htmlFor={taskId}
        className="cursor-pointer"
        style={{ textDecoration: task.completed ? 'line-through' : 'initial' }}
      >
        {/** 🎯 Rendre le label de la tâche */}
      </label>
      <input
        type="checkbox"
        name={taskId}
        id={taskId}
        // 🎯 Utiliser task.completed pour la prop "checked"
        // checked={}
        // 🎯 Appeler onToggle avec l'ID de la tâche lors du "onChange"
        // onChange={(event) => ...}
        className="appearance-none cursor-pointer border-2 p-2 rounded-sm checked:bg-green-600 checked:border-green-600"
      />
    </div>
  )
}
