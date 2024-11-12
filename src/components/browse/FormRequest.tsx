import { useState, FormEvent } from 'react';

export default function FormRequest() {
  const [name, setName] = useState<string>('');
  const [recommendation, setRecommendation] = useState<string>('');

  const disableForm = true;
  const disableText = 'Sending message is not available';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { name, recommendation });
    setName('');
    setRecommendation('');
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-transparent">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${disableForm ? 'text-red-600 border-red-600 placeholder-red-600 cursor-not-allowed' : 'focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 cursor-pointer'} w-full px-4 py-2 mb-2 text-sm border rounded-md focus:outline-none bg-transparent`}
          placeholder={`${disableForm ? disableText : 'Enter your name...'}`}
          required
          readOnly={disableForm}
        />
        <textarea
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
          className={`${disableForm ? 'text-red-600 border-red-600 placeholder-red-600 cursor-not-allowed' : 'focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 cursor-pointer'} w-full px-4 resize-none py-2 mb-3 text-sm border rounded-md focus:outline-none bg-transparent`}
          rows={4}
          placeholder={`${disableForm ? disableText : 'Write your question and suggestion...'}`}
          readOnly={disableForm}
        />
        <button
          type="submit"
          className={`${disableForm ? 'bg-indigo-500 cursor-not-allowed' : 'hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700'} w-full bg-indigo-500 text-white py-3 rounded-md`}
          disabled={disableForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
