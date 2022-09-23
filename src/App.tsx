import * as React from 'react'
import './App.css'

import Today from './components/Today'
// 🎯 Importer le composant NewTask
// 🎯 Importer le composant ToDo

// On initialise l'application avec ces tâches pour tester plus rapidement
// Le type Task est défini pour vous dans le fichier tasks.d.ts
const INITIAL_DATA: Task[] = [
  { id: 1, label: 'Read an article', completed: false },
  { id: 2, label: 'Try not to fall asleep', completed: false },
  { id: 3, label: 'Go for a walk', completed: false },
  { id: 4, label: 'Listen to a podcast', completed: false }
]

export default function App() {
  // 🎯 Déclarer un state "tasks" pour stocker les tâches (initialisé avec INITIAL_DATA)

  // Event handler pour l'ajout d'une nouvelle tâche
  function handleAddTask(label: string) {
    // 🎯 Créer un nouvel objet Task pour la nouvelle tâche à partir du label
    // 💡 id = tasks.length + 1, completed = false
    // 🎯 Mettre à jour "tasks" pour ajouter la nouvelle tâche
  }

  function handleToggleTask(id: number) {
    // 🎯 Mettre à jour tasks en "togglant" la valeur "completed" la tâche d'id "id"
    // 💡 setTasks(prev => prev.map(task => task.id === id ? ... : task))
    // 💡 completed: !task.completed
  }

  return (
    <div className="w-[400px] bg-white mx-auto my-12 rounded-sm p-8 shadow-md">
      <Today />
      {/** 🎯 Rendre NewTask en lui passant "handleAddTask" */}

      {/** 🎯 Boucler sur les "tasks" et rendre ToDo pour chaque tâche */}
      {/** 🎯 Lui passer la "task" et "handleToggleTask" */}
      {/** 💡 Ne pas pas oublier la key 😉 */}
    </div>
  )
}
