# wordle-back

Considerations:

This project is a prototype solution for the requested example. It was elaborated as far as my current capabilities made it possible; original approach included:
- Using 3 services separated one from each other
  - Continuous execution of single process for changing selected word every 5 min.
  - Multiple live sessions / sockets management server for handling every connection established with different users.
  - DB-interactive service.
- Using NoSQL database.

Known missing features:
- Reading from .txt file for selecting new 5-char long word.
- Changing selected word every 5 min.
- No testing.
- Lack of security.

Inconsistencies:
- For every letter evaluation when iterating over "user_word", it is asked to increment "tries" counter by one, making it only possible for the user to try 1 word (instead of 3 or more chances) as "tries" counter could go up to 5 if misses every time.
