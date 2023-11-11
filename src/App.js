import React, { useState } from 'react'
import './tailwind-config.js'

export default function App() {
  const emojis = [
    { emoji: '😀', description: 'Happy' },
    { emoji: '😄', description: 'Smiling' },
    { emoji: '😆', description: 'Grinning Squinting' },
    { emoji: '😊', description: 'Blushing Smiling' },
    { emoji: '😍', description: 'Heart Eyes' },
    { emoji: '🎮', description: 'Gaming' },
    { emoji: '🍕', description: 'Pizza' },
    { emoji: '⚡', description: 'Power' },
    { emoji: '🗡️', description: 'Sword' },
    { emoji: '👑', description: 'Crown' },
    { emoji: '🎉', description: 'Celebration' },
    { emoji: '🌞', description: 'Sun' },
    { emoji: '🌈', description: 'Rainbow' },
    { emoji: '🐶', description: 'Dog' },
    { emoji: '🐱', description: 'Cat' },
    { emoji: '🐼', description: 'Panda' },
    { emoji: '🦄', description: 'Unicorn' },
    { emoji: '🍦', description: 'Ice Cream' },
    { emoji: '🍉', description: 'Watermelon' },
    { emoji: '🎈', description: 'Balloon' },
  ];

  const [theme, setTheme] = useState("dark");
  const [emojiSize, setEmojiSize] = useState("text-4xl");
  const [fontFamily, setFontFamily] = useState("font-sans");
  const [searchTerm, setSearchTerm] = useState("");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const handleSizeChange = (e) => {
    setEmojiSize(`text-${e.target.value}`);
  }

  const handleFontChange = (e) => {
    setFontFamily(`font-${e.target.value}`);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredEmojis = emojis.filter((emoji) => {
    return emoji.description.toLowerCase().includes(searchTerm.toLowerCase()) || ['🐼', '🦄', '🍦', '🍉', '🎈'].includes(emoji.emoji);
  });

  return (
    <div className={`h-screen ${theme === "dark" ? 'bg-gradient-to-r from-black via-gray-800 to-black' : 'bg-gradient-to-r from-white via-gray-200 to-white'}`}>
      <h1 className={`text-3xl font-extrabold tracking-tight ${theme === "dark" ? 'text-white' : 'text-black'}`}>
        My React App Deivid Uchiha
        
      </h1>
      <div className="w-full mt-4">
        <input
          type="text"
          placeholder="Search"
          className={`${theme === "dark" ? 'text-black' : 'text-black'} w-full p-2 border border-gray-400 rounded-md shadow-md`}
          onChange={handleSearch}
        />
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 ${theme === "dark" ? 'text-black' : 'text-black'}`}>
        {filteredEmojis.map((emoji, index) => (
          <div key={index} className={`bg-gray-200 p-4 text-center rounded-md shadow-md ${emojiSize} ${fontFamily}`}>
            <span>{emoji.emoji}</span>
            <p className="mt-2">{emoji.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <div className="mr-2">
          <label htmlFor="theme" className="font-bold">Theme:</label>
          <select id="theme" className={`ml-2 p-2 border border-gray-400 rounded-md shadow-md ${theme === "dark" ? 'text-black' : 'text-black'}`} value={theme} onChange={handleThemeChange}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div className="mr-2">
          <label htmlFor="size" className="font-bold text-black">Size:</label>
          <select id="size" className={`ml-2 p-2 border border-gray-400 rounded-md shadow-md ${theme === "dark" ? 'text-black' : 'text-black'}`} onChange={handleSizeChange}>
            <option value="2xl">Large</option>
            <option value="3xl">Medium</option>
            <option value="4xl">Small</option>
          </select>
        </div>
        <div>
          <label htmlFor="font" className="font-bold text-black">Font:</label>
          <select id="font" className={`ml-2 p-2 border border-gray-400 rounded-md shadow-md ${theme === "dark" ? 'text-black' : 'text-black'}`} onChange={handleFontChange}>
            <option value="sans">Sans-serif</option>
            <option value="serif">Serif</option>
          </select>
        </div>
      </div>
    </div>
  );
}