# GrowEasy Frontend Assignment

This is a frontend project developed using Next.js, React, and TailwindCSS for displaying and editing advertisement banners. The project allows users to edit banner details and upload custom images.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [AdBanner](#adbanner)
  - [EditBannerBs](#editbannerbs)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rishabhguptajs/groweasy-frontend-assignment.git
    cd groweasy-frontend-assignment
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

1. Navigate to `http://localhost:3000` in your browser.
2. The homepage will display a grid of advertisement banners.
3. Click on the edit icon (pencil) on any banner to open the edit modal.
4. In the edit modal, you can:
    - Change the banner image by selecting one from the provided options or uploading a custom image.
    - Edit the banner title, description, CTA (Call to Action), and background template.
    - Click "Done" to save the changes or "Cancel" to discard them.

## Components

### AdBanner

This component is responsible for displaying individual advertisement banners. It accepts the following props:

- `title`: The title of the banner.
- `description`: The description of the banner.
- `cta`: The call to action text.
- `image`: The image URL for the banner.
- `backgroundTemplate`: The background template for the banner.
- `onEdit`: Function to call when the edit button is clicked.
- `onCtaClick`: Function to call when the CTA button is clicked.

### EditBannerBs

This component renders a modal for editing banner details. It accepts the following props:

- `banner`: The banner object to be edited.
- `onClose`: Function to call when the modal is closed.
- `onSave`: Function to call when the banner is saved.

## Dependencies

- `next`: The React framework for production.
- `react`: The React library for building user interfaces.
- `tailwindcss`: A utility-first CSS framework for rapidly building custom designs.

# Thank you!