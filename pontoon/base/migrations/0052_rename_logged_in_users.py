# Generated by Django 3.2.15 on 2023-12-05 20:02

from django.db import migrations


def rename_logged_in_users(apps, schema_editor):
    UserProfile = apps.get_model("base", "UserProfile")
    UserProfile.objects.filter(visibility_email="Logged in users").update(
        visibility_email="Logged-in users"
    )


class Migration(migrations.Migration):
    dependencies = [
        ("base", "0051_localecodehistory"),
    ]

    operations = [
        migrations.RunPython(
            code=rename_logged_in_users,
            reverse_code=migrations.RunPython.noop,
        ),
    ]
