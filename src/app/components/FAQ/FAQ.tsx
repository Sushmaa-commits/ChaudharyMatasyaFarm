import React from 'react';

interface FaqProps {
  question: string;
  answer: string;
}

export default function FAQ({ question, answer }: FaqProps) {
  return (
    <li>
      <ul role="list" className="space-y-10">
        <li>
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            {question}
          </h3>
          <p className="mt-4 text-sm text-gray-700">{answer}</p>
        </li>
      </ul>
    </li>
  );
}
