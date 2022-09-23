import * as React from 'react'

type Props = {
  onAdd: (label: string) => void
}

export default function NewTask({ onAdd }: Props) {
  // 🎯 Déclarer un state "label" pour stocker le label entré par l'utilisateur
  // 💡 Initialiser sa valeur avec une chaîne vide ""

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    // 🎯 Si la longueur de "label" est supérieure à 0, appeler "onAdd"

    // 🎯 Réinitialiser le label à une chaîne vide pour faciliter l'ajout multiple de tâches
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-4 my-4">
      <input
        type="text"
        className="flex-1 border-b-2 py-2 pl-2"
        placeholder="What do you need to do today ?"
        // 🎯 Utiliser "label" comme value
        // value={}
        onChange={(event) => {
          // 🎯 Mettre à jour le label lors de changements (onChange)
          // 💡 La nouvelle valeur de l'input est dans event.target.value
        }}
      />
      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-md">
        Add
      </button>
    </form>
  )
}
