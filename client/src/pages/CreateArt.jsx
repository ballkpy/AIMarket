import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite'
import SidebarArt from '../components/SidebarArt'

const CreateArt = () => {
    useEffect(() => {
        initFlowbite()
    }, [])

    // const axios = require('axios');

    const [showNegative, setShowNegative] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    const generateImage = async () => {
        try {

            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer 216513cf-9771-439a-a48a-b299dd1b82e3'
                },
                body: JSON.stringify({
                    height: 512,
                    modelId: '6bef9f1b-29cb-40c7-b9df-32b51c1f67d3',
                    prompt: 'An oil painting of a cat',
                    width: 512
                })
            };

            fetch('https://cloud.leonardo.ai/api/rest/v1/generations', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
            // const response = await fetch('http://localhost:8080/api/leonardo', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ prompt: prompt }),
            // })

            // const data = await response.json();
            // setResult(data)
        } catch (error) {
            console.log(error);
        }

    }
    return (

        <div>

            <SidebarArt />
            {/* content area */}
            <div className="p-4 sm:ml-64 bg-black h-screen flex justify-between">
                <div className="px-5 w-screen">
                    <h1 className='text-2xl font-bold text-white mt-2'> AI Image Generation</h1>
                    <div className="mb-4 mt-4">
                        <input type="text" id="default-input" onChange={(e) => setPrompt(e.target.value)} value={prompt} className="bg-gray-800 text-gray-900 text-sm rounded border-gray-800 focus:border-yellow-600 block w-full p-2.5" />
                        <input type="text" id="default-input" className={`bg-gray-800 text-gray-900 text-sm rounded border-gray-800 focus:border-yellow-600 block w-full p-2.5 mt-3 ${showNegative ? `block` : `hidden`}`} />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="drop-left flex items-center">
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                            <select id="countries" className="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>



                            <label className="relative inline-flex items-center ml-3 cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" onClick={() => setShowNegative(!showNegative)} />
                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className="ml-3 text-sm font-medium text-gray-300">addnegative</span>
                            </label>



                        </div>
                        <div className="drop-right">
                            <button type="button" onClick={generateImage} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Genarate</button>
                        </div>
                    </div>

                </div>

            </div>

            <h1>{result}</h1>

        </div>
    )
}

export default CreateArt