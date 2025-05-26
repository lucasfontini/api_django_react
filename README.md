# Full-Stack Item Management Application

This project is a web application for managing items. It features a Django REST API backend and a React frontend.

## Backend

The backend is a RESTful API built with Django and Django REST Framework.

### Features
*   **Item Management**: Allows creating, reading, updating, and deleting items.
*   **Data Model**: Each item has the following fields:
    *   `name`: (CharField) The name of the item.
    *   `description`: (TextField) A description of the item.
    *   `created_at`: (DateTimeField) The date and time when the item was created (auto-generated).

### API Endpoints

The main API endpoint for items is:
*   `/api/items/`: Supports `GET` (list items), `POST` (create item).
*   `/api/items/<id>/`: Supports `GET` (retrieve item), `PUT` (update item), `DELETE` (delete item).

## Frontend

The frontend is a single-page application (SPA) built with React.

### Features
*   **View Items**: Displays a list of items fetched from the backend.
*   **Create Items**: Provides a form to add new items.
*   **Navigate**: Uses React Router for navigation between different views (Home, Item list, Create Item form).

### Main Components
*   `App.js`: The main application component that sets up routing.
*   `Home.js`: The landing page of the application.
*   `Item.js`: Component for displaying the list of items.
*   `Form.js` (`CadastraItem`): Component for the item creation form.
*   `NavBar.js`: Navigation bar component.

The frontend interacts with the backend API (Django) to fetch and submit item data using utility functions in `src/components/utils/Api.js`.

## Getting Started

### Prerequisites

*   Python (for the backend)
*   Node.js and npm (for the frontend)

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3.  **Install dependencies:**
    The project uses `uv` for package management. If you don't have `uv`, install it first.
    ```bash
    pip install uv
    uv pip install -r requirements.txt # Assuming a requirements.txt, or generate one from pyproject.toml/uv.lock
    # Or, if using Poetry (based on pyproject.toml):
    # pip install poetry
    # poetry install
    ```
    *Note: A `requirements.txt` might need to be generated from `pyproject.toml` and `uv.lock` if not present. For now, this is a general instruction.*
4.  **Apply database migrations:**
    ```bash
    python api_project/manage.py migrate
    ```
5.  **Run the development server:**
    ```bash
    python api_project/manage.py runserver
    ```
    The backend API will typically be available at `http://127.0.0.1:8000/`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend/app_react
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    The frontend application will typically be available at `http://localhost:3000/`.

For more detailed frontend scripts (like `npm test`, `npm run build`), please refer to the `frontend/app_react/README.md` file.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these general steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code follows the project's coding style and includes tests where applicable.
