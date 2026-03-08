import React from 'react'

export default function WhyUs(){
  return (
    <section className="bg-white rounded-lg p-6 shadow-sm my-6">
      <h2 className="text-xl font-semibold">Why Choose Us</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">Pure Ingredients<br/><span className="text-sm text-gray-500">No fillers, no additives</span></div>
        <div className="p-4 border rounded">Sustainably Sourced<br/><span className="text-sm text-gray-500">Ethical suppliers</span></div>
        <div className="p-4 border rounded">Nutrient Rich<br/><span className="text-sm text-gray-500">High quality nutrition</span></div>
      </div>
    </section>
  )
}
