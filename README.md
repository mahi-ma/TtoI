# Text to Image Conversion using Hugging Face Diffusion Model

This React component allows users to convert text into an image using the Hugging Face diffusion model.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3. Install required dependencies:

    ```bash
    npm install
    ```

## Setup Hugging Face Token

1. Get your Hugging Face token from the [Hugging Face website](https://huggingface.co/login).
2. Create a `.env.local` file in the root directory of the project.
3. Add your Hugging Face token to the `.env.local` file:

    ```plaintext
    NEXT_PUBLIC_HUGGING_FACE_TOKEN=<your_hugging_face_token>
    ```

## Running the Project

To run the project, use the following command:

```bash
npm run dev
```

## Testing the project

To test the project, use the following command:

```bash
npm run test
```

## Usage

1. **Enter Text:** Input the text you want to convert into the textarea.

2. **Submit:** Click the "Submit" button to initiate the text-to-image conversion process.

3. **View Image:** The generated image will be displayed below the submit button.

4. **Error Handling:** If you attempt to submit without entering any text, an error message will prompt you to input text before proceeding.


## Project Demo

Here is the screenshot of running project:

<a href="https://ibb.co/ccBkkXk" target="_blank">Project screenshot demo</a>
