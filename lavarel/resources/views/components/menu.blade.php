<nav>

    <div>

        <a href="/">

            <h2>Home</h2>

        </a>

    </div>

    <div>

        <h2>Pessoas</h2>

        <ul>

            <li><a href="/pessoas">Lista</a></li>

            <li><a href="/pessoas/criar">Novo</a></li>

        </ul>

    </div>

    <div>

        @auth

            <h2>Olá, {{ Auth::user()->name }}</h2>

            <a href="/logout">Logout</a>

        @else

            <a href="/login">Login</a>

        @endauth

    </div>

</nav>