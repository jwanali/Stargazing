INSERT INTO users (name,email,password)
VALUES 
('Eva Stanley','sebastianguerra@ymail.com','password'),
('Louisa Meyer',' jacksonrose@hotmail.com','password'),
('Dominic Parks','victoriablackwell@outlook.com','password');

INSERT INTO events (event_name, date, description)
VALUES 
('Stargazing Night', '2023-11-15', 'Join us for a night of stargazing and astronomy enthusiasts.'),
('stargazing Campout', '2023-12-05', 'Experience a magical night of camping and stargazing under the stars.'),
('stargazing Campout', '2024-06-20', 'Experience a magical night of camping and stargazing under the stars.');

INSERT INTO locations (longitude, latitude, name, date)
VALUES
(49.2807, -123.1216, 'Vancouver', '2023-11-15'),
(53.5932, -113.4953, 'Edmonton', '2023-12-01'),
(49.9008, -97.0739, 'winnipeg', '2024-05-01');

INSERT INTO users_events (user_id, event_id)
VALUES
(1,1),
(2,2),
(3,3);

INSERT INTO events_locations (event_id, location_id)
VALUES
(1,1),
(2,2),npm 
(3,3);

INSERT INTO users_locations (user_id, location_id)
VALUES
(1,1),
(2,2),
(3,3);